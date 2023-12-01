import { ICreateCourseRepository } from '../protocols';
import { CourseInput } from '../../controller/protocols';
import { Course } from '../../model/course';

export class PostgresCreateCourseRepository implements ICreateCourseRepository {
  async createCourse(course: CourseInput): Promise<Course> {
    return { id: 1, active: true, ...course };
  }
}
