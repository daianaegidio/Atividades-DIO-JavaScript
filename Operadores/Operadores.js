
function verificarNumeros (numero1,numero2){
	
	let comparar='';
	if (numero1===numero2){
		
		 comparar= ' são iguais';
	} else {
		
		comparar= ' são diferentes';
	}
	
	return'Os Numeros '+ numero1 + ' e '+ numero2 + comparar +'.';
}

function comparacao (numero1,numero2){
	
	const soma= numero1+numero2;
	
	let vardez='menor do que 10';
	let varvinte='menor do que 20';
	
	if (soma > 10){
		vardez= 'maior do que 10';
	}
if (soma > 20){
	
	varvinte= 'maior do que 20';
}
return 'Sua soma é '+soma+ ' ' +  vardez + ' e ' + varvinte + '.';
}

function unirfuncao(numero1, numero2){
	
	const unirum= verificarNumeros (numero1, numero2);
	const unirdois=comparacao(numero1, numero2);
	
	return unirum + unirdois;
}

console.log(unirfuncao(15,25));