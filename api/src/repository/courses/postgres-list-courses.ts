import { IListCoursesRepository } from './interfaces';
import { Course } from '../../model/course';
import db from '../../db';

export class PostgresListCoursesRepository implements IListCoursesRepository {
  async listCourses(search?: string): Promise<Course[]> {
    const res = await db.query(
      `
      SELECT
        courses.id,courses.title,users.name,category.title
      AS
        category,courses.description,courses.image,courses.active
      FROM courses
      INNER JOIN category ON category.id = courses.category_id
      INNER JOIN users ON users.id = courses.professor_id
      ${search ? 'WHERE courses.title ILIKE $1' : ''}
      ORDER BY 
        courses.active DESC,  courses.title
      `, search ? ['%' + search + '%'] : []);

    for (let i = 0; i < res.rows.length; i++) {
      res.rows[i].professor = res.rows[i].name;
      delete res.rows[i].name;
    }

    return res.rows;
  }
}
