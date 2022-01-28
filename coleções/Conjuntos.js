const vetor= [30, 30, 40, 5, 223, 2049, 3034, 5];

function comparar(arr){
	const numeros= new Set (arr);
	
	return [...numeros];
	
}

console.log(comparar(vetor));