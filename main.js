import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import connection from './config/db.js';
import dotenv from 'dotenv'


const app = express();
dotenv.config();

connection();

app.set("port", process.env.PORT || 3000)
app.use(express.json());
app.use('/user', userRouter);
app.use('/movie', movieRouter);



app.listen(app.get("port"), ()=>{ console.log('Server successfully initiated at port 3000')});


