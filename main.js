import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import rentRouter from './rent/router.js';
import connection from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
//import swaggerUi from 'swagger-ui-express';
//import swaggerDoc from './config/swaggerDoc.js';


const app = express();
dotenv.config();

connection();

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/movie', movieRouter);
app.use('/api/rent', rentRouter);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(process.env.PORT, () => console.log(`Server successfully initiated at port ${process.env.PORT}`, "🎈"));