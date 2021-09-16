/**Exercicio 1
 * Crie uma classe Person com os atributos name, gender e age. Crie os getters e
setters. No setters valide se o name for em branco retorne uma mensagem de name
inválido. Se o gender for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a age for 0 retorne uma mensagem de age inválida. Crie um método
para receber a age, se a age for maior ou igual a 18 exibir a mensagem Person
maior de age, caso contrário exibir a mensagem Person menor de age.
*/
import fs from 'fs';
import path from 'path';
interface IPerson {
  name: string;
  gender: string;
  age: number;
}
class Person {
private name : string;
private gender : string;
private age : number;

constructor({name,gender,age} : IPerson) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
get getName() : string {
  return this.name;
}
set setName(name: string) {
  if(name.length < 1) {
      throw new Error("invalid name!");
  }
  this.name = name;
}
get getGender() : string {
  return this.gender;

}
set setGender(gender: string) {
  if(!GenderIsValid(gender)) {
    throw new Error("invalid gender!");
  }
  this.gender = gender;
}
get getAge() : number {
  return this.age;

}
set setAge(age: number) {
  if(age == 0) {
      throw new Error("invalid age!");
  }
  this.age = age;
}
public verifyAge() : string {
  return this.age >= 18 ? 'Of legal age!': 'Under age'
}
}
try {
  const name = "";
  const gender = "masculino";
  const age = 18;
  const PersonTest = new Person({name,gender,age});
  PersonTest.setGender = 'feminino';
  console.log(PersonTest.verifyAge());
  
} catch (error : any) {
  console.log(error.message);
}
// console.log(
// PersonTest.getname+"\n"+
// PersonTest.getgender+"\n"+
// PersonTest.getage+"\n"+
// PersonTest.pegarage(17)
// );
// PersonTest.setname = ''
// PersonTest.setgender = 'a';
// PersonTest.setage = 0;
 

/** Funções de Validações */
function GenderIsValid (gender : string) : boolean {
  const jsonPath : fs.PathOrFileDescriptor = fs.readFileSync(path.join(__dirname, './json/validGender.json')).toString();
  const json : string = JSON.parse(jsonPath);
  let genders : Array<string> = [];
  Object.keys(json).map(gender => genders.push(gender));
  return genders.includes(gender);

}

