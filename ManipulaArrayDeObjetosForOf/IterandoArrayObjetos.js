let pessoas = [
	{
	    nome: "Maria",
	    idade: 28,
	    cidade: "São Paulo"
	},
	{
	    nome: "João",
	    idade: 34,
	    cidade: "Rio de Janeiro"
	},
	{
	    nome: "Ana",
	    idade: 22,
	    cidade: "Curitiba"
	},
	{
	    nome: "Pedro",
	    idade: 45,
	    cidade: "Belo Horizonte"
	},
	{
	    nome: "Lucas",
	    idade: 31,
	    cidade: "Porto Alegre"
	}
    ];
let count=1
for (const pessoa of pessoas) {

	   console.log(`A pessoa ${count} chama-se ${pessoa.nome}, tem ${pessoa.idade} e mora em ${pessoa.cidade}`);
	count++
}
    