const pedidos = [
	{
	  cliente: "João Silva",
	  produto: "Camiseta",
	  quantidade: 3
	},
	{
	  cliente: "Maria Oliveira",
	  produto: "Calça Jeans",
	  quantidade: 2
	},
	{
	  cliente: "Pedro Santos",
	  produto: "Tênis",
	  quantidade: 1
	},
	{
	  cliente: "Ana Costa",
	  produto: "Bolsa",
	  quantidade: 4
	}
      ];
pedidos.forEach(pedido => {
	let novoObjeto={"cliente":pedido.cliente,"quantidade":pedido.quantidade}
	console.log(novoObjeto);
});      