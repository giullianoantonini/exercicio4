function returnVoid(): void {
  const num1: number = 1;
  const num2: number = 1;
  console.log(num1, num2);
}

console.log(returnVoid());

function returnString(): string {
  const nome1: string = "Abel ";
  const nome2: string = "Ferreira";
  return nome1 + nome2;
}

console.log(returnString());

function returnNumber(): number {
  const num1: number = 1;
  const num2: number = 2;
  return num1 + num2;
}

console.log(returnNumber());

function returnBoolean(numero1: number = 1, numero2: number = 2): boolean {
  return numero1 !== numero2;
}

console.log(returnBoolean());

function returnNull(param: string): null {
  if (param === "null") {
    return null;
  } else {
    return null;
  }
}

console.log(returnNull("null"));

function returnUndefined(a: string, b: string): undefined {
  return undefined;
}

console.log(returnUndefined("Ana", "Paula"));

function returnArray(): number[] {
  const num1: number = 1;
  const num2: number = 2;
  const num3: number = 3;
  return [num1, num2, num3];
}

console.log(returnArray());

function returnAny(par1: any, par2: any): any {
  return par1 + par2;
}

console.log(returnAny("José ", 123));
console.log(returnAny(321, true));

class FormadorObjetos {
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}

function returnObjeto(nome: string, sobrenome: string, idade: number): object {
  return new FormadorObjetos(nome, sobrenome, idade);
}

const objeto1 = returnObjeto("José", "Silva", 99);
const objeto2 = returnObjeto("Laura", "Santos", 15);

console.log(objeto1, objeto2);

enum CorGremio {
  blue = "Azul",
  black = "Preto",
  white = "Branco",
}

function qualCor(cor: CorGremio): CorGremio {
  return cor;
}

console.log(qualCor(CorGremio.blue));
console.log(qualCor(CorGremio.black));
console.log(qualCor(CorGremio.white));
