
import { pgHelper } from "../db/pg-helper";
import { User } from "../models/user";

export class UserRepository {
async GetAllUser(): Promise<User[]> {
    const result: User[] = await pgHelper.client.query(`SELECT * FROM "transactions","users"`);

    return (result)
}
}