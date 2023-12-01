import { Request } from 'express';
import { IFindUserRepository } from '../../repository/users/protocols';
import { ILoginController, LoginInput } from './protocols';
import { User } from '../../model/user';

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
      const { email, password } = req.body as LoginInput;

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

      const user = await this.findUserRepository.findUser({ email, password });

      if (!user) {
        return {
          statusCode: 500,
          body: 'User not found'
        };
      }

      const generateToken = (user: User) => user && 'custom-token';
      return {
        statusCode: 200,
        body: generateToken(user)
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
