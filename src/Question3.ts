/*** Exercicio 3 Crie uma classe Invoice com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Invoice para multiplicar a quantidade
comprada pelo preço */
interface IInvoice {
  number : number
  description : string
  purchasedAmount : number
  price : number
  }
  class Invoice {
  private number : number
  private description : string
  private purchasedAmount : number
  private price : number
  
  constructor({number,description,purchasedAmount,price}:IInvoice) {
    this.number = number;
    this.description = description;
    this.purchasedAmount = purchasedAmount;
    this.price = price;
  }
  public getInvoiceValue() : number {
    return this.purchasedAmount * this.price;
  }
  }

  try {
  const number  = 1;
  const description = "halls";
  const purchasedAmount = 3;
  const price = 2;
  const invoice = new Invoice({number,description,purchasedAmount,price});
  console.log(invoice.getInvoiceValue());
  } catch (error : any) {
    console.log(error.message);
  }