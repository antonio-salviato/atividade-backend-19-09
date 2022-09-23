import { Router } from "express";
import { CreateTransaction } from "../controller/transactions/create-transactions";
import { DeleteTransaction } from "../controller/transactions/delete-transaction";
import { GetTransactionById } from "../controller/transactions/get-transactionById";
import { GetTransactionByUser } from "../controller/transactions/get-transactionsbyuser";
import { UpdateTransaction } from "../controller/transactions/update-transaction";
import { CreateUser } from "../controller/users/create-user";
import { DeleteUser } from "../controller/users/delete-user";
import { FindUserById } from "../controller/users/find-userbyID";
import { GetAllUser } from "../controller/users/get-all-user";
import { UpdateUser } from "../controller/users/update-user";


export const userRouter = Router();

userRouter.get('/', new GetAllUser().execute);

userRouter.get('/:userId', new FindUserById().execute);

userRouter.delete('/:userId', new DeleteUser().execute);

userRouter.put('/:userId', new UpdateUser().execute);
    
userRouter.post('/:userId/transactions', new CreateTransaction().execute);

userRouter.get('/:userId/transactions', new GetTransactionByUser().execute);

userRouter.get('/:userId/transactions/:id', new GetTransactionById().execute);

userRouter.put('/:userId/transactions/:id', new UpdateTransaction().execute);

userRouter.delete('/:userId/transactions/:id', new DeleteTransaction().execute);


