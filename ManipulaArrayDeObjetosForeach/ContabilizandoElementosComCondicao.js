const clientes = [
	{
	    nome: "Maria Silva",
	    idade: 28,
	    cidade: "São Paulo"
	},
	{
	    nome: "João Souza",
	    idade: 34,
	    cidade: "Rio de Janeiro"
	},
	{
	    nome: "Ana Oliveira",
	    idade: 22,
	    cidade: "Belo Horizonte"
	},
	{
	    nome: "Carlos Pereira",
	    idade: 40,
	    cidade: "Porto Alegre"
	},
	{
	    nome: "Fernanda Lima",
	    idade: 31,
	    cidade: "Curitiba"
	}
    ];
let count=0
clientes.forEach(cliente => {
	if (cliente.idade > 30) {
		count++
	}
});
    console.log("O número  de clientes acima dos 30 anos é: ",count);
    