import express from 'express';
import { transactionRouter, userRouter } from './routes';
import { DB } from './db/db';
import { CreateUser } from './controller/users/create-user';
import { HasUserMiddleware } from './middleware/has-User';


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

userRouter.post('/users', new CreateUser().execute);

app.use('/users', new HasUserMiddleware().execute, userRouter)

app.use('/transactions', transactionRouter)


console.log(DB.userDb)

app.listen(8080, () => console.log('Servidor iniciado'));