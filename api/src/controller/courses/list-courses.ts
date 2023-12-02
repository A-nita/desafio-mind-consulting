import { Request } from 'express';
import { IListCoursesController } from './interfaces';
import { IListCoursesRepository } from '../../repository/courses/interfaces';

export class ListCoursesController implements IListCoursesController {
  constructor(private readonly listCoursesRepository : IListCoursesRepository) {}

  async handle(req: Request) {
    try {
      const { search } = req.query;

      const courses = await this.listCoursesRepository.listCourses(search as string);

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
