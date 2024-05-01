import { Request, Response, NextFunction } from 'express';

interface Error {
  statusCode?: number;
  message: string;
  stack?: string;
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
};

export default errorHandler;