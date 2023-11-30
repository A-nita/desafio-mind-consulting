import { IGetCoursesRepository } from '../../controller/get-course/protocols';
import { Course } from '../../model/course';

export class PostgresGetCoursesRepository implements IGetCoursesRepository {
  async getCourses(): Promise<Course[]> {
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
