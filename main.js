import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import connection from './config/db.js';


const app = express();


app.listen(5000, ()=>{ console.log('Server successfully initiated at port 5000')});
connection();

app.use(express.json());
app.use('/user', userRouter);
app.use('/movie', movieRouter);