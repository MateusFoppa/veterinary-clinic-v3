import express from 'express';
import 'express-async-errors';

import dotenv from 'dotenv';

// Import routes Tutors
import tutorRouter from './routes/tutor.routes';
import authRouter from './routes/auth.routes';
import petRouter from './routes/pet.routes';

import errorHandlerMiddleware from './middleware/error-handler';
import notFound from './middleware/not-foud';

// rest of the packages
import cors from 'cors';

//Swagger
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const path = require('path');
const swaggerDocument = YAML.load(path.resolve(__dirname, 'swagger.yaml'));

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());


app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument));

app.use('/auth', authRouter);
app.use('/tutor', tutorRouter);
app.use('/pet', petRouter);


app.use(errorHandlerMiddleware);
app.use(notFound);

export default app;
