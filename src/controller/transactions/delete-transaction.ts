import { Request, Response } from "express";
import { DB } from "../../db/db";


export class DeleteTransaction{
execute(req: Request, res: Response){
    try {
        const {userId, id} = req.params
        const user = DB.userDb.find(user => user.id === userId)
        if(!user){
            return res.status(404).json({message:'Not Found ID'})
          }
        const transaction = user.transactions.find(t => t.id === id)
        if(!transaction){
            return res.status(404).json({message:'Not Found Transaction'})
          }
        user.removeTransaction(transaction)
          return res.status(204).send()
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}