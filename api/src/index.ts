import express, { Request, Response } from 'express';
import cors from 'cors';
import passport from 'passport';

import { config } from 'dotenv';

import { ListCoursesController } from './controller/courses/list-courses';
import { CreateCourseController } from './controller/courses/create-course';
import { EditCourseController } from './controller/courses/edit-course';
import { ListCategoriesController } from './controller/courses/list-categories';
import { FindUserController } from './controller/users/find-user';
import { LoginController } from './controller/auth/login';

import { PostgresListCoursesRepository } from './repository/courses/postgres-list-courses';
import { PostgresCreateCourseRepository } from './repository/courses/postgres-create-course';
import { PostgresEditCourseRepository } from './repository/courses/postgres-edit-course';
import { PostgresListCategoriesRepository } from './repository/courses/postgres-list-categories';
import { PostgresFindUserRepository } from './repository/users/postgres-find-user';

import passportConfig from './utils/passport';

config();
passportConfig();

const jwtPassport = passport.authenticate('jwt', { session: false });

const app = express();

app.use(express.json(), cors());

const port = process.env.PORT || 8000;

// ROTAS
app.get('/list-courses', jwtPassport, async (req: Request, res: Response) => {
  const listCoursesRepository = new PostgresListCoursesRepository();

  const getCoursesController = new ListCoursesController(listCoursesRepository);

  const { body, statusCode } = await getCoursesController.handle(req);

  res.status(statusCode).send(body);
});

app.post('/create-course', jwtPassport, async (req: Request, res: Response) => {
  const createCourseRepository = new PostgresCreateCourseRepository();

  const createCourseController = new CreateCourseController(createCourseRepository);

  const { body, statusCode } = await createCourseController.handle(req);

  res.status(statusCode).send(body);
});

app.post('/edit-course', jwtPassport, async (req: Request, res: Response) => {
  const editCourseRepository = new PostgresEditCourseRepository();

  const editCourseController = new EditCourseController(editCourseRepository);

  const { body, statusCode } = await editCourseController.handle(req);

  res.status(statusCode).send(body);
});

app.get('/list-categories', jwtPassport, async (req: Request, res: Response) => {
  const listCategoriesRepository = new PostgresListCategoriesRepository();

  const getCategoriesController = new ListCategoriesController(listCategoriesRepository);

  const { body, statusCode } = await getCategoriesController.handle();

  res.status(statusCode).send(body);
});

app.get('/find-user', async (req: Request, res: Response) => {
  const findUserRepository = new PostgresFindUserRepository();

  const findUserController = new FindUserController(findUserRepository);

  const { body, statusCode } = await findUserController.handle(req);

  res.status(statusCode).send(body);
});

app.post('/login', async (req: Request, res: Response) => {
  const findUserRepository = new PostgresFindUserRepository();

  const loginController = new LoginController(findUserRepository);

  const { body, statusCode } = await loginController.handle(req);

  res.status(statusCode).send(body);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
