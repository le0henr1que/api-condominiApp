import express from 'express';
import { module1 } from './modules/module1';
const app = express();

app.use(express.json());
app.use(module1);

export { app };
