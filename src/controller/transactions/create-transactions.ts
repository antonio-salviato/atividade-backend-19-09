import { Response } from "express";
import { CustomRequest } from "../../@types/express";
import { Transaction } from "../../models/transactions";

export class CreateTransaction{
    execute(req: CustomRequest, res: Response) {
        try {
    
          const {user} = req
        console.log(user)
        const {title, value, type} = req.body

        const transaction = new Transaction(title, value, type)
        
        user.addTransaction(transaction)
        
        res.json(transaction)
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}