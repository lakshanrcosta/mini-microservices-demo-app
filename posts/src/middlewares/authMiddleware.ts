import { Request, Response, NextFunction } from 'express';

const publicRoutes = [
  '/api/posts/public' // Add your public routes here
  // Add more public routes as needed
];

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (publicRoutes.includes(req.path)) {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === 'Bearer your-token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
