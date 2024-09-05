const carrinho = {
	itens: [
	  {
	    nome: "Camiseta",
	    quantidade: 2,
	    precoUnitario: 50.00
	  },
	  {
	    nome: "Calça Jeans",
	    quantidade: 1,
	    precoUnitario: 120.00
	  },
	  {
	    nome: "Tênis",
	    quantidade: 1,
	    precoUnitario: 200.00
	  }
	]
      };
carrinho.itens.forEach(item => {
	const total=item.quantidade * item.precoUnitario;
	console.log(`O total do ${item.nome} é de R$${total}`);
});
