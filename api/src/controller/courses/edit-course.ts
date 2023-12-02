import { Request } from 'express';
import { IEditCourseController as IEditCourseController } from './interfaces';
import { IEditCourseRepository as IEditCourseRepository } from '../../repository/courses/interfaces';
import { Course } from '../../model/course';

export class EditCourseController implements IEditCourseController {
  constructor(private readonly editCourseRepository : IEditCourseRepository) {}

  async handle(req: Request) {
    try {
      const newCourse = req.body as Course;

      const course = await this.editCourseRepository.editCourse(newCourse);

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
