import { errorHandler } from './middlewares/errorHandler';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes/crawl';

const app = express();
const port = process.env.PORT || 5235;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' })); // Adjust the origin as needed
app.use(bodyParser.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});
app.use('/api/crawl', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
