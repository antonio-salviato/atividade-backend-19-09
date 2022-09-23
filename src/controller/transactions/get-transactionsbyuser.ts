import { Request, Response } from "express";
import { DB } from "../../db/db";

export class GetTransactionByUser {
  execute(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = DB.userDb.find((user) => user.id === userId);
      if (!user) {
        return res.status(404).json({ message: "Not Found ID" });
      }

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
