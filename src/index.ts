import express from 'express';
import { transactionRouter, userRouter } from './routes';
import { DB } from './db/db';


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter)

app.use('/transactions', transactionRouter)

console.log(DB.userDb)

app.listen(8080, () => console.log('Servidor iniciado'));