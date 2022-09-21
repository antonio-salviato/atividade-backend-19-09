import { Request, Response } from "express";
import { DB } from "../../db/db";


export class GetAllUser{
execute(req: Request, res: Response){
    try {
      res.json({data:DB.userDb})
        
        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}