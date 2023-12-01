import { Request } from 'express';
import { ICreateCourseController } from './protocols';
import { ICreateCourseRepository } from '../../repository/courses/protocols';
import { CourseInput } from './protocols';

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
