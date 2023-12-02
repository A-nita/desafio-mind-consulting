import { Request } from 'express';
import bcrypt from 'bcrypt';
import { ILoginController, ILoginInput } from './protocols';
import { IFindUserRepository } from '../../repository/users/protocols';
import { encryptJwt } from '../../utils/crypto';

export class LoginController implements ILoginController {
  constructor(private readonly findUserRepository : IFindUserRepository) {}

  /*
  * 0° Estrutura o login/find-user
  * 1° Validar de verdade o e-mail Check
  * 2° Criptografar a senha para salvar no banco
  * 3° Gerar o token de acesso ao sistema
  */
  async handle(req: Request) {
    try {
      const { email, password } = req.body as ILoginInput;

      // Função de validar email
      const emailValidate = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };

      if (!emailValidate(email)) {
        return {
          statusCode: 202,
          body: 'E-mail inválido'
        };
      }

      const user = await this.findUserRepository.findUser({ email });

      if (!user) {
        return {
          statusCode: 202,
          body: 'Usuário não encontrado'
        };
      }

      const result = await bcrypt.compare(password, user.password);

      if (!result) {
        return {
          statusCode: 202,
          body: 'Senha incorreta'
        };
      }

      return {
        statusCode: 200,
        body: encryptJwt({ email: user.email, admin: user.admin })
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 202,
        body: 'Somethings went wrong'
      };
    }
  }
}
