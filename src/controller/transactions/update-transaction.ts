import { Request, Response } from "express";
import { DB } from "../../db/db";


export class UpdateTransaction{
execute(req: Request, res: Response){
    try {
        const {userId, id} = req.params
        const {title, value, type} = req.body
        const user = DB.userDb.find(user => user.id === userId)
        if(!user){

            return res.status(404).json({message:'Not Found ID'})
          }
        const transaction = user.transactions.find(t => t.id === id)
        if(!transaction){
            return res.status(404).json({message:'Not Found Transaction'})
          }
          if(title) transaction.title = title;
          if(value) transaction.value = value;
          if(type) transaction.type = type;
        
        res.json(transaction)
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}