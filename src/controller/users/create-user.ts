import { Request, Response } from "express";
import { DB } from "../../db/db";
import { User } from "../../models/user";

export class CreateUser {
  execute(req: Request, res: Response) {
    try {
      const { name, cpf, email, age } = req.body;
      const user = new User(name, cpf, email, age);
      DB.userDb.push(user);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
