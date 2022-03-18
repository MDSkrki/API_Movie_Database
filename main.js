import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import connection from './config/db.js';
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.set("port", process.env.PORT || 5000)

app.listen(app.get("port"), ()=>{ console.log('Server successfully initiated at port 5000')});
connection();

app.use(express.json());
app.use('/user', userRouter);
app.use('/movie', movieRouter);