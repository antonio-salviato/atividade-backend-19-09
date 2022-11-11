import express from 'express';
import { DB } from './db/db';
import { CreateUser } from './controller/users/create-user';
import { HasUserMiddleware } from './middleware/has-User';
import { transactionRouter } from './routes/transactions';
import { userRouter } from './routes/users';


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post('/users', new CreateUser().execute);

app.use('/users', userRouter)

app.use('/transactions', transactionRouter)


console.log(DB.userDb)

app.listen(8080, () => console.log('Servidor iniciado'));