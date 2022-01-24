function pares(lista){

let cont=0;	
if  ( !lista.length) { return console.log("Vetor Invalido!")} ;


	while(cont<lista.length){
		
	
		
		if(lista[cont] ===0){
			
			console.log("Você já é zero!")
		}else if (lista[cont]% 2 ===0){
			
			console.log(`Substituindo ${lista[cont]} por 0`);
			lista[cont]=0;
		}
		
		
		cont++;
	}
	
	console.log( `Lista Atualizada: ${lista}`);
}

let vetor= [1,2,4,6,7,10,27,33,46,80,90];
pares("vetor");