import { Course } from '../../model/course';
import { HttpResponse } from '../protocols';

export interface ICreateCoursesController {
  handle(): Promise<HttpResponse<Course>>;
}
