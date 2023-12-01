import { Request } from 'express';
import { Course } from '../../model/course';
import { HttpResponse } from '../protocols';

export interface ICreateCourseController {
  handle(req: Request): Promise<HttpResponse<Course>>;
}
