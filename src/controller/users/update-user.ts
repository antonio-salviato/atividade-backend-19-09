import { Request, Response } from "express";
import { DB } from "../../db/db";


export class UpdateUser{
execute(req: Request, res: Response){
    try {
      const {id} = req.params
      const {name, cpf, email, age} = req.body
      const user = DB.userDb.find(user => user.id === id )
      
      if(!user){
        
        return res.status(404).json({message:'Not Found ID'})
      } 
      if(name){ 
          user.name = name
      }
      if(cpf){ 
        user.cpf = cpf
    }
    if(email){ 
        user.email = email
    }
    if(age){ 
        user.age = age
    }
    // Object.assign(user, {name, cpf, email, age})
    const index = DB.userDb.findIndex(user => user.id === id)
    DB.userDb[index] = user
      return res.status(200).json({data:user})

        

        
    } catch (error:any) {res.status(500).send(error.message)
        
    }

}

}