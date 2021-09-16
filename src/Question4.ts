/*** Exercicio 4 Crie uma classe para calcular o imposto de income. Crie uma classe Pai com os
atributos name e income anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação */
interface IIncomeTax {
  name : string;
  income : number;
  }
  
  abstract class IncomeTax {
  protected name : string;
  protected income : number;
  constructor({name,income}:IIncomeTax) {
    this.name = name;
    this.income = income;
  }
  get getName(): string {
    return this.name;
  }
  get getIncome(): number {
    return this.income;
  }
  set setName(name:string) {
    if(name.length < 1) {
      throw new Error("invalid name!")
    }
    this.name = name;
  }
  set setIncome(income:number) {
    if(income == 0) {
      throw new Error("invalid income!")
    }
    this.income = income;
  }
  public abstract getTax(): number;
  }
  
  interface IPhysicalPerson {
  healthExpenses : number;
  name : string;
  income : number;
  }
  class PhysicalPerson extends IncomeTax {
  private healthExpenses : number
  
  constructor({healthExpenses,name,income}:IPhysicalPerson) {
    super({name,income});
    this.healthExpenses = healthExpenses;
  }
  public get getHealthExpenses(): number {
    return this.healthExpenses;
  }
  public set setHealthExpenses(healthExpenses : number) {
    if(healthExpenses < 0) {
      throw new Error("Gasto com saude invalido!");
    }
    this.healthExpenses = healthExpenses;
  }
  public getTax() {
    const healthDisregarded = this.healthExpenses == 0 ? 0 : (this.healthExpenses * 0.50);
    if(this.income < 20000) {
      return (this.income * 0.15) - healthDisregarded
    }else {
      return (this.income * 0.25) - healthDisregarded
    }
  }
  }
  interface IlegalPerson {
  employeeAmount : number;
  name : string;
  income : number;
  }
  class LegalPerson extends IncomeTax {
  
  private employeeAmount : number
  
  constructor({employeeAmount,name,income}:IlegalPerson) {
    super({name,income});
    this.employeeAmount = employeeAmount;
  }
  public get getEmployeeAmount(): number {
    return this.employeeAmount;
  }
  public set setEmployeeAmount(employeeAmount : number) {
    if(employeeAmount == 0) {
      throw new Error("Invalid Employee amount");
    }
    this.employeeAmount = employeeAmount;
  }
  public getTax() {
    if(this.employeeAmount > 10) {
      return this.income * 0.14;
    }else {
      return this.income * 0.16;
    }
  }
  }
  try {
  const healthExpenses = 100;
  const name = "Guilherme";
  const income = 1000; // 150 (tax) - 50 (health)
  // const physicalPerson = new PhysicalPerson({healthExpenses,name,income});
  // console.log(physicalPerson.getTax());
  
  const employeeAmount = 9;

  const legalPerson = new LegalPerson({employeeAmount,name,income});
  console.log(legalPerson.getTax());
  } catch (error: any) {
    console.log(error.message);
  }
  