import { hasFormatter } from "../interfaces/hasFormatter"
 
export class payment implements hasFormatter{
   constructor(
 readonly recipient:string,
 private  details:string,
 public  amount:number,
   ){}
   
   format() {
       return `${this.recipient} owed to  £${this.amount} for ${this.details}`
   }
}
