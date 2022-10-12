import 'dotenv/config';
import * as express from 'express';
import routerApi from './routes';
import client from './db/dbConnect';

const app = express();

const PORT = process.env.SERVER_PORT || 3000;
app.use(express.json());

routerApi(app);

app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}`)
});