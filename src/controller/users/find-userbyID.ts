import { Request, Response } from "express";
import { DB } from "../../db/db";


export class FindUserById{
execute(req: Request, res: Response){
    try {
      const {id} = req.params
      const user = DB.userDb.find(user => user.id === id )
      if(!user){
        return res.status(404).json({message:'Not Found ID'})
      }
      return res.status(200).json({data:user})
        
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}