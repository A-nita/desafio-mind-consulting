import { CourseInput } from '../../controller/courses/protocols';
import { Course } from '../../model/course';

export interface IListCoursesRepository {
  listCourses(): Promise<Course[]>
}

export interface ICreateCourseRepository {
  createCourse(course: CourseInput): Promise<Course>
}

export interface IEditCourseRepository {
  editCourse(course: CourseInput): Promise<Course>
}
