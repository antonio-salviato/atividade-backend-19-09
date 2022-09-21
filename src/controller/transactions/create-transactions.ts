import { Request, Response } from "express";
import { DB } from "../../db/db";
import { Transaction } from "../../models/transactions";

export class CreateTransaction{
execute(req: Request, res: Response){
    try {
        const {userId} = req.params
        const user = DB.userDb.find(user => user.id === userId)
        if(!user){
            return res.status(404).json({message:'Not Found ID'})
          }
        
        const {title, value, type} = req.body

        const transaction = new Transaction(title, value, type)
        
        user.addTransaction(transaction)
        
        res.json(transaction)
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}