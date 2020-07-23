var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
  nome: "Matheus",
  idade: 29,
  falar: function() {
    console.log("Olá, tudo bem?");
  },
  dizerNome: function() {
    console.log("O meu nome é " + this.nome);
  },
  aniversario: function() {
    this.idade += 1;
  },
  saudacao: function() {
    return 'Sr. ' + this.nome;
  }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);