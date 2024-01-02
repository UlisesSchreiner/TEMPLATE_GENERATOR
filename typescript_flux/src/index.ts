import express, { Request, Response, NextFunction } from 'express';
import router from './controller/Router';
import localConfig from 'local-configuration-manager';
import cors from 'cors';
import init from './graph/template/mobileVersion';
const bodyParser = require('body-parser');

init()

const app = express();
const port = localConfig.getConfigFile().PORT || 3000;

app.use(express.json());
app.use(cors({
    "origin": "*"
}));
app.use(bodyParser.json());
app.use('/', router);

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
