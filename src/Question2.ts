/**Exercicio 2 Crie uma classe Vehicles com os atributos model, mark, year, rentalValue e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar model, mark, year, rentalValue e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação.*/
interface IVehicles {
  model : string;
  mark : string;
  year : number;
  rentalValue : number;
  daysCount : number;
  }
  class Vehicles {
  private model : string;
  private mark : string;
  private year : number;
  private rentalValue : number;
  private daysCount : number;
  constructor({model,mark,year,daysCount,rentalValue} : IVehicles) {
    this.model = model;
    this.mark = mark;
    this.year = year;
    this.daysCount = daysCount;
    this.rentalValue = rentalValue;
  }
  
  get getModel(): string {
    return this.model;
  }
  
  get getMark(): string {
    return this.mark;
  }
  
  get getYear(): number {
    return this.year;
  }
  
  get getRentalValue(): number {
    return this.rentalValue;
  }
  
  get getDaysCount(): number {
    return this.daysCount;
  }
  
  set setModel(model : string) {
    if(model.length < 1) {
      throw new Error("invalid Model!")
    }
    this.model = model;
  }
  set setMark(mark : string) {
    if(mark.length < 1) {
      throw new Error("Invalid Mark!")
    }
    this.mark = mark;
  }
  set setYear(year : number) {
    if(year == 0) {
      throw new Error("Invalid year!")
    }
    this.year = year;
  }
  set setRentalValue(rentalValue : number) {
    if(rentalValue == 0) {
      throw new Error("Invalid Rental Value!")
    }
    this.rentalValue = rentalValue;
  }
  set setDaysCount(daysCount : number) {
    if(daysCount == 0) {
      throw new Error("invalid Count Days!")
    }
    this.daysCount = daysCount;
  }
  public tour() : number {
    return this.daysCount * this.rentalValue;
  }
  }
  try {
  const mark = "Lorem";
  const model = "Ipsum";
  const year = 0;
  const daysCount = 1;
  const rentalValue = 2;
  const veiculo = new Vehicles({mark,year,model,daysCount,rentalValue})
  // veiculo.setMark = "";
  veiculo.setRentalValue = 0;
  console.log(
    veiculo.getMark+"\n"+
    veiculo.getModel+"\n"+
    veiculo.getYear+"\n"+
    veiculo.getDaysCount+"\n"+
    veiculo.getRentalValue+"\n"+
    veiculo.tour()+"\n"
  )
  } catch (error : any) {
    console.log(error.message);
  }