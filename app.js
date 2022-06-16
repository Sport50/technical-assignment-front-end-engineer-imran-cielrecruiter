import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

//Import All Routes
import newsRoutes from './server/routes/newsRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const baseUrl = process.env.BaseApiUrl || '/api/v1';

app.use(`${baseUrl}/artical`, newsRoutes);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
      console.log(
        `Database connected and Server listing on http://localhost:${PORT}/`
      )
    )
    .catch((err) => console.error(err))
);
