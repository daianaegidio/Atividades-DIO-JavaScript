const  alunos  =  [
    {
        nome : 'Guilherme' ,
        nota : 3 ,
        turma : '205D' ,
    } ,
    {
        nome : 'Matheus' ,
        nota : 10 ,
        turma : '204B' ,
    } ,
    
    {
        nome : 'Lucas' ,
        nota : 8 ,
        turma : '205B' ,
    } ,
    
    {
        nome : 'Thais' ,
        nota : 4 ,
        turma : '205D' ,
    } ,
] ;

function aprovados(alunos, media) {
	let auxiliar = [];
	let auxiliar2 = [];

	for (let cont = 0; cont < alunos.length; cont++) {
		let { nota, nome } = alunos[cont];

		if (nota >= media) {
			auxiliar.push(nome);
		}else{
			
			auxiliar2.push(nome);
		}
		
		
	}

	return `Os Alunos Aprovados são: ${auxiliar} \nOs alunos Reprovados são: ${auxiliar2}`; 
}

console.log(aprovados(alunos, 6));