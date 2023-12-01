import express from 'express';
import { config } from 'dotenv';
import { ListCoursesController } from './controller/courses/list-courses';
import { CreateCourseController } from './controller/courses/create-course';
import { EditCourseController } from './controller/courses/edit-course';
import { ListCategoriesController } from './controller/courses/list-categories';
import { PostgresListCoursesRepository } from './repository/courses/postgres-list-courses';
import { PostgresCreateCourseRepository } from './repository/courses/postgres-create-course';
import { PostgresEditCourseRepository } from './repository/courses/postgres-edit-course';
import { PostgresListCategoriesRepository } from './repository/courses/postgres-list-categories';

config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

// ROTAS
// Courses
app.get('/list-courses', async (req: express.Request, res: express.Response) => {
  const listCoursesRepository = new PostgresListCoursesRepository();

  const getCoursesController = new ListCoursesController(listCoursesRepository);

  const { body, statusCode } = await getCoursesController.handle();

  res.send(body).status(statusCode);
});

app.post('/create-course', async (req: express.Request, res: express.Response) => {
  const createCourseRepository = new PostgresCreateCourseRepository();

  const createCourseController = new CreateCourseController(createCourseRepository);

  const { body, statusCode } = await createCourseController.handle(req);

  res.send(body).status(statusCode);
});

app.post('/edit-course', async (req: express.Request, res: express.Response) => {
  const editCourseRepository = new PostgresEditCourseRepository();

  const editCourseController = new EditCourseController(editCourseRepository);

  const { body, statusCode } = await editCourseController.handle(req);

  res.send(body).status(statusCode);
});

app.get('/list-categories', async (req: express.Request, res: express.Response) => {
  const listCategoriesRepository = new PostgresListCategoriesRepository();

  const getCategoriesController = new ListCategoriesController(listCategoriesRepository);

  const { body, statusCode } = await getCategoriesController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
