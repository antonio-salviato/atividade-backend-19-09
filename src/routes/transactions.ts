import { Router } from "express";
import { CreateTransaction } from "../controller/transactions/create-transactions";

export const transactionRouter = Router()
transactionRouter.post('/', new CreateTransaction().execute)