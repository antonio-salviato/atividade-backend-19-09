import { Response } from "express";
import { CustomRequest } from "../../@types/express";



export class DeleteTransaction{
  execute(req: CustomRequest, res: Response) {
    try {

      const {user} = req
        const {id} = req.params
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