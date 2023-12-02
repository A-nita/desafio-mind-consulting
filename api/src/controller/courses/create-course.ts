import { Request } from 'express';
import { ICreateCourseController } from './interfaces';
import { ICreateCourseRepository } from '../../repository/courses/interfaces';
import { CourseInput } from './interfaces';

export class CreateCourseController implements ICreateCourseController {
  constructor(private readonly createCourseRepository : ICreateCourseRepository) {}

  async handle(req: Request) {
    try {
      const newCourse = req.body as CourseInput;

      const course = await this.createCourseRepository.createCourse(newCourse);

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
