/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/api', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
