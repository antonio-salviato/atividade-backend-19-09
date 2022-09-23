import { Response } from "express";
import { CustomRequest } from "../../@types/express";



export class GetTransactionById{
  execute(req: CustomRequest, res: Response) {
    try {

      const {user} = req
          const {id} = req.params
          const transaction = user.transactions.find(t => t.id === id)
        if(!transaction){
            return res.status(404).json({message:'Not Found Transaction'})
          }
        
        res.json(transaction)
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}