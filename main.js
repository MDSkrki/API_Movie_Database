import express from 'express';
import userRouter from './user/router.js';
import movieRouter from './movie/router.js'
import connection from './config/db.js';
import dotenv from 'dotenv';
//import swaggerUi from 'swagger-ui-express';
//import swaggerDoc from './config/swaggerDoc.js';


const app = express();
dotenv.config();

connection();

app.set("port", process.env.PORT || 5000)
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/movie', movieRouter);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(app.get("port"), () => console.log('Server successfully initiated at port 5000', "🎈"));