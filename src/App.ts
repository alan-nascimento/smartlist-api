import 'dotenv/config';

import express, { Application } from 'express';
import mongoose, { Mongoose } from 'mongoose';

import routes from './routes';

class App {
  public server: Application = express();

  private mongodb: Mongoose = mongoose;

  constructor() {
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private database(): void {
    this.mongodb.connect(
      `${process.env.MONGO_URL}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
