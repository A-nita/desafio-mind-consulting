import { IListCoursesRepository } from './protocols';
import { Course } from '../../model/course';
import db from '../../db';

export class PostgresListCoursesRepository implements IListCoursesRepository {
  async listCourses(): Promise<Course[]> {
    const res = await db.query('SELECT * FROM courses', []);
    return res.rows;
  }
}
