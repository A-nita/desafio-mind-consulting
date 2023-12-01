import { IListCoursesRepository } from '../protocols';
import { Course } from '../../model/course';

export class PostgresListCoursesRepository implements IListCoursesRepository {
  async listCourses(): Promise<Course[]> {
    return [
      {
        title: 'matematica',
        professor: 'Fabio',
        category: 'Exatas',
        description: 'Explicando calculo 1 para leigos',
        image: 'caminho_da_img',
      },
    ];
  }
}
