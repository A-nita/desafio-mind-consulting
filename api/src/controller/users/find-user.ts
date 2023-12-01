import { Request } from 'express';
import { IFindUserController, UserInput } from './protocols';
import { IFindUserRepository } from '../../repository/users/protocols';

export class FindUserController implements IFindUserController {
  constructor(private readonly findUserRepository : IFindUserRepository) {}

  async handle(req: Request) {
    try {
      const user = req.body as UserInput;
      // Validação de email e senha

      const course = await this.findUserRepository.findUser(user);

      return {
        statusCode: 200,
        body: course
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
