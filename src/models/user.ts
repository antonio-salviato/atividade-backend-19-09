import { Transaction } from "./transactions";
import crypto from 'crypto'


export class User{
    #id: string
    get id(): string {
        return this.#id;
      }
    #name: string
    get name(): string {
        return this.#name;
      }
      set name(name: string){
         this.#name = name
      }
    #cpf: string
    get cpf(): string {
        return this.#cpf;
      }
      set cpf(cpf: string){
        this.#cpf = cpf
     }
    #email: string
    get email(): string {
        return this.#email;
      }
      set email(email: string){
        this.#email = email
     }
    #age: number
    get age(): number {
        return this.#age;
      }
      set age(age: number){
        this.#age = age
     }

      #transactions: Transaction[]
      get transactions(): Transaction [] {
        return this.#transactions;
      }

    constructor(name: string, cpf: string, email: string, age: number){
        this.#name = name;
        this.#cpf = cpf;
        this.#email = email;
        this.#age = age;
        this.#id = crypto.randomUUID()
        this.#transactions = []
    }
    addTransaction(transaction: Transaction){
        this.#transactions.push(transaction)
    } 
    
    removeTransaction(transaction: Transaction){
      const newArray = this.#transactions.filter(t => t.id !== transaction.id)
      this.#transactions = newArray
    }


    toJSON(){
      return {
        name: this.#name,
        cpf: this.#cpf,
        email: this.#email,
        age: this.#age,
        id: this.#id,
        transactions: this.#transactions
      }
    }

}
