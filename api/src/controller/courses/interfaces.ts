import { Request } from 'express';
import { HttpResponse } from '../interfaces';
import { Course } from '../../model/course';
import { Category } from '../../model/category';

export interface ICourseInput {
  title: string;
  professor: string;
  category: string;
  description: string;
  image: Buffer;
}

export interface IEditCourseInput {
  id: string;
  title: string;
  professor: string;
  category: string;
  description: string;
  image: Buffer;
}

export interface ICreateCourseController {
  handle(req: Request): Promise<HttpResponse<Course>>;
}

export interface IEditCourseController {
  handle(req: Request): Promise<HttpResponse<Course>>;
}

export interface IListCoursesController {
  handle(req: Request): Promise<HttpResponse<Course[]>>;
}

export interface IListCategoriesController {
  handle(): Promise<HttpResponse<Category[]>>;
}
