import { Request } from 'express';
import { ICreateCourseController } from './protocols';
import { ICreateCourseRepository } from '../../repository/protocols';

export class CreateCourseController implements ICreateCourseController {
  constructor(private readonly createCourseRepository : ICreateCourseRepository) {}

  async handle(req: Request) {
    try {
      const newCourse = req.body;
      const course = await this.createCourseRepository.createCourse(newCourse);

      return {
        statusCode: 200,
        body: course
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong'
      };
    }
  }
}
