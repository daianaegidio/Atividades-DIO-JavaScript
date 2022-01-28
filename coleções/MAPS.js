function admin (map){
	let adm=[];
	
for ([key,value]of map)	{
	if (value === 'Administrador'){
		
		adm.push(key);
	}

	}
	return adm;
}

const usuario = new Map();

usuario.set('Matheus', 'Administrador');
usuario.set('Lucas', 'Administrador');
usuario.set('Tais', 'User');
usuario.set('Sandra', 'User');

console.log(admin(usuario));