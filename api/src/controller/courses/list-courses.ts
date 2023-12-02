import { IListCoursesController } from './interfaces';
import { IListCoursesRepository } from '../../repository/courses/interfaces';

export class ListCoursesController implements IListCoursesController {
  constructor(private readonly getCoursesRepository : IListCoursesRepository) {}

  async handle() {
    try {
      const courses = await this.getCoursesRepository.listCourses();
      return {
        statusCode: 200,
        body: courses,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: 'Something went wrong',
      };
    }
  }
}
