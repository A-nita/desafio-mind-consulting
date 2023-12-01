import { Request } from 'express';
import bcrypt from 'bcrypt';
import { IFindUserRepository } from '../../repository/users/protocols';
import { ILoginController, ILoginInput } from './protocols';
// import { User } from '../../model/user';
import { PostgresFindUserRepository } from '../../repository/users/postgres-find-user';

const saltRounds = 10;

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
          statusCode: 500,
          body: 'E-mail invalid'
        };
      }

      // const user = await this.findUserRepository.findUser({ email, password });

      // Função de criptografar senha
      // const encryptedPass = await bcrypt.hash(password, saltRounds);
      // console.log(encryptedPass);

      // buscar usuário no banco
      const findUser = new PostgresFindUserRepository();
      const user = await findUser.findUser({ email, password });

      const result = await bcrypt.compare(password, user.password);

      // const result = user.password === password;

      if (!result) {
        return {
          statusCode: 500,
          body: 'Password is incorrect'
        };
      }

      return {
        statusCode: 200,
        body: 'generateToken(user)'
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: 'Somethings went wrong'
      };
    }
  }
}
