import express from 'express';
import { config } from 'dotenv';
import { ListCoursesController } from './controller/list-courses';
import { CreateCourseController } from './controller/create-course';
import { PostgresListCoursesRepository } from './repository/list-courses/postgres-list-courses';
import { PostgresCreateCourseRepository } from './repository/create-course/postgres-create-course';

config();

const app = express();

const port = process.env.PORT || 8000;

// ROTAS

app.get('/list-courses', async (req: express.Request, res: express.Response) => {
  const listCoursesRepository = new PostgresListCoursesRepository();

  const getCoursesController = new ListCoursesController(listCoursesRepository);

  const { body, statusCode } = await getCoursesController.handle();

  res.send(body).status(statusCode);
});

app.get('/create-course', async (req: express.Request, res: express.Response) => {
  const createCourseRepository = new PostgresCreateCourseRepository();

  const createCourseController = new CreateCourseController(createCourseRepository);

  const { body, statusCode } = await createCourseController.handle(req);

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
