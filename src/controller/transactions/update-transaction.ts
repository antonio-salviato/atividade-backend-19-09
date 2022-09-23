import { Request, Response } from "express";
import { CustomRequest } from "../../@types/express";



export class UpdateTransaction{
  execute(req: CustomRequest, res: Response) {
    try {

      const {title, value, type} = req.body
      const {user} = req
      const {id} = req.params
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