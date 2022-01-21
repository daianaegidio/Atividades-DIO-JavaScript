function verificarPalindromo(string){
	
	if(!string){
		
		return "Invalido!";
	}
	
	var palavra= string.split("").reverse().join("")===string;
	
	if(palavra===false){
		
		return `A palavra ${string} não é um Palindromo`
	}
		if(palavra===true){
		
		return `A palavra ${string} é um Palindromo`
	}
}

console.log(verificarPalindromo("OVO"));