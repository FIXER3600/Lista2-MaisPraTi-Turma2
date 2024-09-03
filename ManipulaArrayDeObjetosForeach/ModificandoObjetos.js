const produtos = [
	{
	    nome: "Produto 1",
	    preco: 100.00,
	    desconto: 10 // em porcentagem
	},
	{
	    nome: "Produto 2",
	    preco: 150.50,
	    desconto: 15 // em porcentagem
	},
	{
	    nome: "Produto 3",
	    preco: 200.99,
	    desconto: 20 // em porcentagem
	},
	{
	    nome: "Produto 4",
	    preco: 250.75,
	    desconto: 5 // em porcentagem
	},
	{
	    nome: "Produto 5",
	    preco: 300.10,
	    desconto: 0 // em porcentagem
	}
    ];
    
    produtos.forEach(produto => {
	const descontoAdicional = 10; // desconto adicional de 10%
	const precoComDesconto = produto.preco - (produto.preco * (descontoAdicional / 100));
	console.log(`Novo preço de ${produto.nome} com desconto de 10%: R$ ${precoComDesconto.toFixed(2)}`);
    });
    