import express from 'express';
const app = express();

const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

app.listen(port, () => console.log(`listening on port ${port}!`));
