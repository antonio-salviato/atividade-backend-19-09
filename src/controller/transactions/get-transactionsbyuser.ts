import { Response } from "express";
import { CustomRequest } from "../../@types/express";


export class GetTransactionByUser {
  execute(req: CustomRequest, res: Response) {
    try {

      const {user} = req
      let income = 0;
      let outcome = 0;

      user.transactions.forEach((transaction) => {
        if (transaction.type === "income") {
          income += transaction.value;
        } else {
          outcome += transaction.value;
        }
      });

      const result = {
        transactions: user.transactions,

        balance: {
          income,
          outcome,
          total: income - outcome,
        },
      };
      return res.status(200).json(result)
    } catch (error: any) {
      
      return res.status(500).send(error.message);
    }
  }
}
