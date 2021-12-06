import cors from "cors";
import { NextFunction, Response } from "express";
import express,{Express} from "express";
import morgan from "morgan";
import logger from "src/utils/logger";
import cookieParser from 'cookie-parser';

class App {
  public app: Express;
  constructor() {
   this.app =express();
    this.middlewares();
  }
  
  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(
        morgan('combined', {
            stream: {
                write: (message:string) => {
                    logger.info(message);
                },
            },
        })
    )
  };

}

export default new App().app;
