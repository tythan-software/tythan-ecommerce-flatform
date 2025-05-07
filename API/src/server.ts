import express from 'express';
import * as bodyParser from 'body-parser';
import HttpException from './middleware/common/http-exception';
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from './middleware/routes';
import logger from './middleware/common/winston-logger'

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  express: express.Express;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();

    this.listen();
    this.middleware();
    this.routes();
    this.startSwagger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(
      (
        err: Error | HttpException,
        _req: any,
        res: any,
        _next: express.NextFunction,
      ) => {
        console.error(err);
        // @ts-ignore
        if (err && err.name === 'UnauthorizedError') {
          return res.status(401).json({
            status: 'error',
            message: 'missing authorization credentials',
          });
          // @ts-ignore
        } else if (err && err.errorCode) {
          // @ts-ignore
          res.status(err.errorCode).json(err.message);
        } else if (err) {
          res.status(500).json(err.message);
        }
      },
    );
    this.express.disable('x-powered-by');
    this.express.get('/', (_req: express.Request, res: express.Response) => {
      res.json({ status: 'API is running on /api' });
    });
  }

  // Server activation
  private listen(): void {
    const PORT = process.env.PORT || 3000;
    this.express.listen(PORT, () => {
      console.info(`server up on port ${PORT}`);
    });
  }

  // Configure API endpoints.
  private routes(): void {
    // use generated routes by tsoa for swagger-ui
    RegisterRoutes(this.express);
  }

  /**
   * start swagger-ui express server and setup the documentation to be served
   */
  private startSwagger(): void {
    try {
      const options = {
        swaggerOptions: {
        },
      };
      this.express.use(["/openapi", "/docs", "/swagger"], swaggerUi.serve, async (_req: any, res: any) => {
        return res.send(swaggerUi.generateHTML(await import('../swagger.json'), options));
      });
    } catch (error) {
      logger.error(error);
    }
  }
}

export default new App().express;