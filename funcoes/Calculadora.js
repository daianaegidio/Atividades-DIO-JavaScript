const pessoa1 = {
	nome: 'Caio',
	idade: 33,
};

const pessoa2 = {
	nome: 'Selena',
	idade: 30,
};



function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}


console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(pessoa2, [27]));