import { ICreateCourseRepository } from './interfaces';
import { ICourseInput } from '../../controller/courses/interfaces';
import { Course } from '../../model/course';
import db from '../../db';

export class PostgresCreateCourseRepository implements ICreateCourseRepository {
  async createCourse(course: ICourseInput): Promise<Course> {

    const res = await db.query(
      'INSERT INTO courses (title, description, category_id, professor_id, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [course.title, course.description, course.category, course.professor, course.image]
    );
    return res.rows[0];
  }
}
