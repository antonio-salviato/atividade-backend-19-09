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
import { HasUserMiddleware } from "../middleware/has-User";

export const userRouter = Router();

userRouter.get("/user", new CreateUser().execute);

userRouter.get("/", new GetAllUser().execute);

userRouter.get("/:userId", new FindUserById().execute);

userRouter.delete("/:userId", new DeleteUser().execute);

userRouter.put("/:userId", new UpdateUser().execute);

userRouter.post(
  "/:userId/transactions",
  new HasUserMiddleware().execute,
  new CreateTransaction().execute
);

userRouter.get(
  "/:userId/transactions",
  new HasUserMiddleware().execute,
  new GetTransactionByUser().execute
);

userRouter.get(
  "/:userId/transactions/:id",
  new HasUserMiddleware().execute,
  new GetTransactionById().execute
);

userRouter.put(
  "/:userId/transactions/:id",
  new HasUserMiddleware().execute,
  new UpdateTransaction().execute
);

userRouter.delete(
  "/:userId/transactions/:id",
  new HasUserMiddleware().execute,
  new DeleteTransaction().execute
);
