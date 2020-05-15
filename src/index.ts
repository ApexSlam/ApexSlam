import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();

import appRouter from './routers/index';

const port = process.env.PORT || 3000;
const app = express();

// Middlewares
// Sets Security-based headers to avoid common security attack vectors
app.use(helmet());
// Allows CORS
app.use(cors());
// add ability to read req.body as json
app.use(express.json());

// Sets up all of the routes that the backend will handle
app.use(appRouter);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
