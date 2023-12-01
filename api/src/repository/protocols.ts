import { CourseInput } from '../controller/protocols';
import { Course } from '../model/course';

export interface IListCoursesRepository {
  listCourses(): Promise<Course[]>
}

export interface ICreateCourseRepository {
  createCourse(course: CourseInput): Promise<Course>
}
