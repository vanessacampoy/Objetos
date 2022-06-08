//Objetos - Um objeto é criado utilizando chaves
//Conjunto de variáveis e funções que são chamadas de propriedades e métodos, serve para organizar o código em pequenas partes reutilizáveis.


var bailarina = {
  nome: "Ana",
  idade: 17,
  tamanhoUniforme: "M",
  matriculada: true,
};

bailarina.nome;
bailarina.matriculada;
console.log(typeof bailarina, bailarina.nome, bailarina.matriculada);

var loja = {
  nome: "Sumirê",
  endereco: "Lapa",
  tipo: "física",
  produtos: "perfumaria",
  estaAberta: true,
};

console.log(loja.nome, loja.tipo, loja.produtos);

//Dot notation get - acessa a propriedade de um objeto utilizando o ponto
console.log(loja.nome, loja.tipo, loja.produtos);

//Dot Notattion Set - substitui o valor de uma propriedade utilizando . e o = após o nome da mesma
var menu = {
  prato: "salada",
  tipo: "acompanhamento",
  ingrediente: "vegetais",
  preco: 23,
};

menu.prato = "frango"; //mudou o nome do prato
console.log(menu.prato);

menu.prato = "sopa";
console.log(menu.prato); //mudou novamente

//This - this faz referência ao próprio objeto
var quadro = {
  width: 800,
  heigth: 100,
  metadeHeigth() {
    return this.heigth / 4;
  },
};
console.log(quadro.metadeHeigth());

//Exercícios
//criar um objeto com meus dados pessoais
var dados = {
  nome: "Vanessa",
  sobrenome: "Campoy",
  idade: 41,
  natural: "São Paulo",
};
console.log(dados.nome, dados.sobrenome, dados.idade, dados.natural);

dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(dados.nomeCompleto());

//modificar o valor da propridade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco)

//criar um objeto de um cachorro que represente um labrador, preto, 10 anos, que late ao ver um homem
cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  late(pessoa) {
    if (pessoa === "homem") {
      return "Late!"
    } else {
      return "Não late!"
    }
  }
}
console.log(cachorro.raca, cachorro.cor, cachorro.idade);
console.log(cachorro.late("homem"));

//Tudo é objeto
var nome  =  "Vanessa"
nome.length

