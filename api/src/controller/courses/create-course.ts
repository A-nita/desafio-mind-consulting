import fs from 'fs';
import { Request } from 'express';
import { UploadedFile } from 'express-fileupload';
import { ICreateCourseController } from './interfaces';
import { ICreateCourseRepository } from '../../repository/courses/interfaces';
import { ICourseInput } from './interfaces';

export class CreateCourseController implements ICreateCourseController {
  constructor(private readonly createCourseRepository : ICreateCourseRepository) {}

  async handle(req: Request) {
    try {
      const { title, description, category, professor } = req.body;
      const image = req.files?.image as UploadedFile;

      if (!image || !title || !description || !category || !professor) {
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

      const newCourse = { title, description, category, professor, image: Buffer.from(img) } as ICourseInput;

      const course = await this.createCourseRepository.createCourse(newCourse);

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
