import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import connection from './config/db.js';
import dotenv from 'dotenv'
import authenticator from './shared/middlewares/middleware.js';


const app = express();
dotenv.config();

connection();

app.set("port", process.env.PORT || 5000)
app.use(express.json());
app.use('/user', userRouter);
app.use('/movie', authenticator('user'), movieRouter);


app.listen(app.get("port"), () => console.log('Server successfully initiated at port 5000', "🎈"));