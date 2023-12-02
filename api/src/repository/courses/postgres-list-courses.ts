import { IListCoursesRepository } from './protocols';
import { Course } from '../../model/course';
import db from '../../db';

export class PostgresListCoursesRepository implements IListCoursesRepository {
  async listCourses(): Promise<Course[]> {
    const res = await db.query(
      'SELECT courses.id,courses.title,users.first_name,users.last_name,category.title AS category,courses.description,courses.image,courses.active FROM courses INNER JOIN category ON category.id = courses.category_id INNER JOIN users ON users.id = courses.professor_id ORDER BY  courses.active DESC,  courses.title', []);
    // para cada linha juntar first name com last name em professor

    for (let i = 0; i < res.rows.length; i++) {
      res.rows[i].professor = res.rows[i].first_name + ' ' + res.rows[i].last_name;
      delete res.rows[i].first_name;
      delete res.rows[i].last_name;
    }
    return res.rows;
  }
}
