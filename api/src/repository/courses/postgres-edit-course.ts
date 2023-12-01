import { IEditCourseRepository } from './protocols';
import { Course } from '../../model/course';
import db from '../../db';

export class PostgresEditCourseRepository implements IEditCourseRepository {
  async editCourse(course: Course): Promise<Course> {

    const res = await db.query(
      'UPDATE courses SET title = ($2), description = ($3), category_id = ($4), professor_id = ($5), image = ($6), active = ($7) WHERE id = ($1)  RETURNING *',
      [course.id, course.title, course.description, course.category, course.professor, course.image, course.active]
    );
    return res.rows[0];
  }
}
