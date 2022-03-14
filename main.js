import express from 'express';
import userRouter from './user/router.js';

const app = express();
app.listen(5000, ()=>{ console.log('Server successfully initiated at port 5000')});

app.use(express.json());

app.use('/user', userRouter);