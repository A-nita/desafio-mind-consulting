import { Request } from 'express';
import { Course } from '../../model/course';
import { Category } from '../../model/category';

export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface CourseInput {
  title: string;
  professor: string;
  category: string;
  description: string;
  image: string;
}

export interface ICreateCourseController {
  handle(req: Request): Promise<HttpResponse<Course>>;
}

export interface IEditCourseController {
  handle(req: Request): Promise<HttpResponse<Course>>;
}

export interface IListCoursesController {
  handle(): Promise<HttpResponse<Course[]>>;
}

export interface IListCategoriesController {
  handle(): Promise<HttpResponse<Category[]>>;
}
