import { Invoice } from './classess/Invoice.js'
import { listTemplates } from './classess/listTemplates.js';
import { payment } from './classess/payment.js';
import { hasFormatter } from './interfaces/hasFormatter.js';

const  form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplates(ul); 

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()
    
    let doc : hasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new payment(tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
    
})

// GENERICS 
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
  let docOne = addUID({name: 'yoshi', age: 40});
  //let docTwo = addUID('shaun');
  
  console.log(docOne);
  
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }
  
  const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'shaun' }
  };
  
  const docFour: Resource<string[]> = {
    uid: 2, 
    resourceName: 'shoppingList', 
    data: ['bread', 'milk']
  };
  
  console.log(docThree, docFour);