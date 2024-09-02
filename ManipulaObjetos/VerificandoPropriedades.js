const livro={
	titulo:"O Pequeno Príncipe",
	autor:"Antoine de Saint-Exupéry",
	anoPublicacao:1943,
	genero:'Infantil'
}
console.log("Antes: ",livro);
for(let propriedade in livro){
	if (!(livro[propriedade] == 'editora')) {
		livro['editora']='Permanência'
	}
}
console.log("Depois: ",livro);
