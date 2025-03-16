import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(`Error occurred in ${req.method} ${req.url}: ${err.stack}`);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
};