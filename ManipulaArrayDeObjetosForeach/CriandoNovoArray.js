const filmes = [
	{
	    titulo: "Inception",
	    diretor: "Christopher Nolan",
	    anoLancamento: 2010
	},
	{
	    titulo: "The Matrix",
	    diretor: "Lana Wachowski, Lilly Wachowski",
	    anoLancamento: 1999
	},
	{
	    titulo: "Pulp Fiction",
	    diretor: "Quentin Tarantino",
	    anoLancamento: 1994
	},
	{
	    titulo: "The Godfather",
	    diretor: "Francis Ford Coppola",
	    anoLancamento: 1972
	},
	{
	    titulo: "The Dark Knight",
	    diretor: "Christopher Nolan",
	    anoLancamento: 2008
	}
    ]
    const arrayNomes=[]
filmes.forEach(filme => {

	arrayNomes.push({"Nome":filme.titulo})
});
console.log(arrayNomes);