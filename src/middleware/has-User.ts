import { Request, Response, NextFunction } from "express";
import { DB } from "../db/db";

export class HasUserMiddleware{
execute(req: Request, res: Response, next: NextFunction){
    try {
        const {userId} = req.params
        const user = DB.userDb.find(user => user.id === userId)
        if(!user){
            return res.status(404).json({message:'Not Found ID'})
          }
        
        //@ts-ignore
        req.user = user
        next()
       
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}