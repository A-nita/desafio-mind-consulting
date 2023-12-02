import { Request } from 'express';
import { IFindUserController, IFindUserInput } from './interfaces';
import { IFindUserRepository } from '../../repository/users/interfaces';

export class FindUserController implements IFindUserController {
  constructor(private readonly findUserRepository : IFindUserRepository) {}

  async handle(req: Request) {
    try {
      const user = req.body as IFindUserInput;
      // Validação de email e senha

      const course = await this.findUserRepository.findUser(user);

      return {
        statusCode: 200,
        body: course
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
