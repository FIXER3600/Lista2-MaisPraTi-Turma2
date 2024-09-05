const estoque = [
	{
	  produto: "Camiseta",
	  quantidade: 50,
	  minimo: 10
	},
	{
	  produto: "Calça Jeans",
	  quantidade: 30,
	  minimo: 5
	},
	{
	  produto: "Tênis",
	  quantidade: 20,
	  minimo: 8
	},
	{
	  produto: "Bolsa",
	  quantidade: 15,
	  minimo: 3
	},
	{
	  produto: "Boné",
	  quantidade: 2,
	  minimo: 12
	}
      ];

estoque.forEach(item => {
	if (item.quantidade < item.minimo) {
		item.quantidade*=2
	}
});
console.log(estoque);
