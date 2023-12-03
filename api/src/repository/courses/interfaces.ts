import { ICourseInput, IEditCourseInput } from '../../controller/courses/interfaces';
import { Course } from '../../model/course';
import { Category } from '../../model/category';

export interface IListCoursesRepository {
  listCourses(search?: string): Promise<Course[]>
}

export interface ICreateCourseRepository {
  createCourse(course: ICourseInput): Promise<Course>
}

export interface IEditCourseRepository {
  editCourse(course: IEditCourseInput): Promise<Course>
}

export interface IListCategoriesRepository {
  listCategories(): Promise<Category[]>
}
