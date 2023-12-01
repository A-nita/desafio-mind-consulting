import { ICreateCoursesController } from './protocols';
import { ICreateCoursesRepository } from '../../repository/protocols';

export class GetCoursesController implements ICreateCoursesController {
  constructor(private readonly getCoursesRepository : ICreateCoursesRepository) {}

  async handle() {
    try {
    // Validar requisição
    // Redirecionar requisiçãoes para o repository
      const courses = await this.getCoursesRepository.createCourse();
      return {
        statusCode: 200,
        body: courses,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong',
      };
    }
  }
}
