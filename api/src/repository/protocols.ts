import { Course } from '../model/course';

export interface IListCoursesRepository {
  listCourses(): Promise<Course[]>
}

export interface ICreateCoursesRepository {
  createCourse(): Promise<Course>
}
