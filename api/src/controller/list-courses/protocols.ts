import { Course } from '../../model/course';
import { HttpResponse } from '../protocols';

export interface IListCoursesController {
  handle(): Promise<HttpResponse<Course[]>>;
}
