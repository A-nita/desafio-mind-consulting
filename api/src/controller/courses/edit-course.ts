import fs from 'fs';
import { Request } from 'express';
import { UploadedFile } from 'express-fileupload';
import { IEditCourseController as IEditCourseController, IEditCourseInput } from './interfaces';
import { IEditCourseRepository as IEditCourseRepository } from '../../repository/courses/interfaces';

export class EditCourseController implements IEditCourseController {
  constructor(private readonly editCourseRepository : IEditCourseRepository) {}

  async handle(req: Request) {
    try {
      const { id, title, description, category } = req.body;
      const image = req.files?.image as UploadedFile;

      const user = req.user as { id: number };
      const professor = user.id.toString();

      if (!id || !title || !description || !category || !professor || !image) {
        return {
          statusCode: 202,
          body: 'Dados inválidos'
        };
      }

      const img = fs.readFileSync(image.tempFilePath);

      if (!img) {
        return {
          statusCode: 202,
          body: 'Não foi possível salvar a imagem enviada'
        };
      }

      const newCourse = { id, title, description, category, professor, image: Buffer.from(img) } as IEditCourseInput;

      const course = await this.editCourseRepository.editCourse(newCourse);

      return {
        statusCode: 200,
        body: course
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 202,
        body: 'Somethings went wrong'
      };
    }
  }
}
