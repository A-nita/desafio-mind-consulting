import express from 'express';
import { config } from 'dotenv';
import { GetCoursesController } from './controller/get-course';
import { PostgresGetCoursesRepository } from './repository/get-courses/postgres-get-course';

config();

const app = express();

const port = process.env.PORT || 8000;

app.get('/courses', async (req: express.Request, res: express.Response) => {
  const getCoursesRepository = new PostgresGetCoursesRepository();

  const getCoursesController = new GetCoursesController(getCoursesRepository);

  const { body, statusCode } = await getCoursesController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
