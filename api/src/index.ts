import express from 'express';
import { config } from 'dotenv';
import { ListCoursesController } from './controller/list-courses';
import { PostgresListCoursesRepository } from './repository/list-courses/postgres-list-courses';

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

// app.get('/create-course', async (req: express.Request, res: express.Response) => {
//   const getCoursesRepository = new PostgresGetCoursesRepository();

//   const getCoursesController = new ListCoursesController(getCoursesRepository);

//   const { body, statusCode } = await getCoursesController.handle();

//   res.send(body).status(statusCode);
// });

app.listen(port, () => console.log(`listening on port ${port}!`));
