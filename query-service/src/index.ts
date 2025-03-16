import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes';
import { loggingMiddleware } from './middlewares/loggingMiddleware';
import { authMiddleware } from './middlewares/authMiddleware';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Custom middleware
app.use(loggingMiddleware);
// app.use(authMiddleware);

// Routes
app.use('/api', router);

// Error handling middleware
app.use(errorMiddleware);

const server = http.createServer(app);

// Start the server
const port = process.env.PORT || 3310;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
