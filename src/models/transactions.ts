import crypto from 'crypto'

type TypeTransaction = "income" | "outcome";

export class Transaction {
  #id: string;
  get id(): string {
    return this.#id;}
  
  #title: string;
  get title(): string {
    return this.#title;}

    set title(title: string){
      this.#title = title
   }

  #value: number;
  get value(): number {
    return this.#value;}
    set value(value: number){
      this.#value = value
   }
  
  #type: TypeTransaction;

  get type(): TypeTransaction {
    return this.#type;}
    set type(type: TypeTransaction){
      this.#type = type
   }

  constructor(title: string, value: number, type: TypeTransaction) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#value = value;
    this.#type = type;
  }
  toJSON(){
    return {
      title: this.#title,
      value: this.#value,
      type: this.#type,
      id: this.#id,

    }

  }
 
  }
