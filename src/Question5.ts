/*** Guilherme Barroso de Oliveira 202010422 */
/*** Exercicio 5 
* 5) Crie uma classe chamada sellers com os atributos name, salary e valor da
venda. Crie os getters e setters e as validações. Crie um método discount para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salary mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos name da company,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salary Total que será a soma do
salary mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
*/
import fs from 'fs';
import path from 'path';
interface Isellers {
  name: string;
  salary: number;
  sellValue: number
  }
  class sellers {
  protected name: string;
  protected salary: number;
  protected sellValue: number;
  constructor({name,salary,sellValue}:Isellers) {
    this.name = name;
    this.salary = salary;
    this.sellValue = sellValue;
  }
  
  get getName() : string {
    return this.name;
  }
  get getSalary(): number {
    return this.salary;
  }
  get getSellValue() : number {
    return this.sellValue;
  }
  set setName(name: string) {
    this.name = name;
  }
  
  set setSalary(salary: number) {
    this.salary = salary;
  }
  set setSellValue(sellValue: number) {
    this.sellValue = sellValue;
  }
  
  public discount(): number {
    return (this.salary * 8) / 100;
    
  }
  protected getRegionsArray() : Array<string> {
    const validRegions = JSON.parse(fs.readFileSync(path.join(__dirname, './json/validRegions.json')).toString());
    let regions : Array<string> = [];
    Object.keys(validRegions).map(reg => regions.push(reg));
    return regions;
  }
  protected commissionByRegion() {
    let validRegions = JSON.parse(fs.readFileSync(path.join(__dirname, './json/validRegions.json')).toString());
    let arrayRegionsValue : any[] = []
    Object.entries(validRegions).map(reg => arrayRegionsValue.push({
      name: reg[0],
      commission: reg[1]
    }))
    return arrayRegionsValue;
  }
  }
  interface IPhysicalSeller {
  name: string;
  salary: number;
  sellValue: number;
  region: string;
  }
  class PhysicalSeller extends sellers {
  private region: string
  
  constructor({name,salary,sellValue, region}:IPhysicalSeller) {
    super({name,salary,sellValue});
    this.region = region;
  }
  get getregion() {
    return this.region;
  }
  set setregion(region: string) {
    if(this.IsValidRegion(region)) {
      this.region = region;
    }
    else {
      throw new Error("Invalid Region!");
    }
  }
  public IsValidRegion(region : string) : boolean {
    const regions = this.getRegionsArray();
    return regions.includes(region.toUpperCase());
  }
  
  public commission(): number {
    const regions = this.commissionByRegion()
    for(let i = 0; i < regions.length; i++) {
      if(this.region.toUpperCase() == regions[i].name) {
        
        return (this.sellValue * regions[i].commission) / 100;
      }
    }
    console.log('Without commissions!');
    return 0;  
  }
  
  public totalSalary() {
    const totalsalary = this.salary + this.commission();
    return `Total salary is ${totalsalary.toFixed(2)}`;
  }
  }
  interface ILegalPerson {
  name: string;
  salary: number;
  sellValue: number;
  company: string;
  employee : number;
  }
  class LegalPerson extends sellers {
  private company: string;
  private employee: number;
  
  constructor({name,salary,sellValue, company, employee}:ILegalPerson) {
    super({name,salary,sellValue});
    this.company = company;
    this.employee = employee;
  }
  get getCompany() {
    return this.company;
  }
  set setCompany(company: string) {
    this.company = company;
  }
  get getEmployee() {
    return this.employee;
  }
  set setEmployee(employee: number) {
    this.employee = employee;
  }
  commission() {
    let commission = 0;
    if (this.sellValue < 5000) {
      commission = (this.sellValue * 2) / 100;
    } else if (this.sellValue >= 5000 && this.sellValue < 10000) {
      commission = (this.sellValue * 4) / 100;
    } else if (this.sellValue >= 10000) {
      commission = (this.sellValue * 6) / 100;
    }
    return commission;
  }
  
  totalSalary() {
    let totalsalary = this.salary + this.commission();
    if (this.employee < 100) {
      totalsalary += 200;
    }
    totalsalary += 300;
    return `Total Salary is ${totalsalary.toFixed(2)}`;
  }
  
  }
  try {
    const name = "Gui"
    const salary = 10000
    const employee = 1;
    const renda = 10000;
    const sellValue = 10000
    const region = "SUDESTE"
    const company = "test";
    const seller = new sellers({name,salary,sellValue});
    // console.log(seller.discount());
    const physycalSeller = new PhysicalSeller({name,region,salary,sellValue});
    // console.log(physycalSeller.commission());
    
    const legalPerson = new LegalPerson({name,salary,sellValue,company,employee})
    // console.log(legalPerson.commission());
    // console.log(legalPerson.discount());
    // console.log(seller.discount());
  
  
  } catch (error) {
    console.log(error);
  }
    
  
  