function validar (vetor, numero){
    try{
    //verificar se o parâmetro não foi enviado
    
    if(!vetor && !numero){
        
throw new ReferenceError ("Envie os parâmetros");
    
    }
    
    // Verifica se o vetor não é do tipo object
    
    if (typeof vetor !=='object'){
        
    throw new TypeError ("Vetor precisa ser do Tipo Object");    
    }
    
        // Verifica se numero é do tipo number
      if (typeof numero !=='number'){
        
    throw new TypeError ("Vetor precisa ser do Tipo Numero");    
    }
   
    // Verifica se o tamnho do vetor é diferente do numero enviado
    
    if(vetor.length !== numero){
	
	throw new RangeError("Tamanho Invalido");
}
    
    return vetor;
    }catch(e){
        
     if (e instanceof RangeError) {
        console.log('Este erro é o RangeError!');
        console.log(e.message);
        
    } else if (e instanceof ReferenceError) {
        console.log('Este erro é o ReferenceError!');
        console.log(e.message);
            
    }else if (e instanceof TypeError) {
        console.log('Este erro é o TypeError!');
        console.log(e.message);
            
    
    
     }else {
        console.log('Erro Não esperado: !' + e);
    
        }
    }
    
}

console.log(validar([4,5,3],3));