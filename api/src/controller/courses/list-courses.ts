import { IListCoursesController } from './protocols';
import { IListCoursesRepository } from '../../repository/courses/protocols';

export class ListCoursesController implements IListCoursesController {
  constructor(private readonly getCoursesRepository : IListCoursesRepository) {}

  async handle() {
    try {
    // Validar requisição
    // Redirecionar requisiçãoes para o repository
      const courses = await this.getCoursesRepository.listCourses();
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
