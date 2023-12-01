import { Request } from 'express';
import { IEditCourseController as IEditCourseController } from './protocols';
import { IEditCourseRepository as IEditCourseRepository } from '../../repository/courses/protocols';
import { CourseInput } from './protocols';

export class EditCourseController implements IEditCourseController {
  constructor(private readonly editCourseRepository : IEditCourseRepository) {}

  async handle(req: Request) {
    try {
      const newCourse = req.body as CourseInput;

      const course = await this.editCourseRepository.editCourse(newCourse);

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
