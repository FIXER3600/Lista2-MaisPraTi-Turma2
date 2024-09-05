const vendas = [
	{
	    produto: "Lâmpada LED",
	    quantidade: 10,
	    valor: 150.00
	},
	{
	    produto: "Notebook",
	    quantidade: 2,
	    valor: 5000.00
	},
	{
	    produto: "Cadeira de Escritório",
	    quantidade: 5,
	    valor: 1250.00
	},
	{
	    produto: "Monitor 24''",
	    quantidade: 3,
	    valor: 2100.00
	},
	{
	    produto: "Teclado Mecânico",
	    quantidade: 7,
	    valor: 980.00
	}
    ];
let count=1
vendas.forEach(venda => {
	let total=venda.quantidade * venda.valor
	console.log(`O total da venda ${count} é de ${total}`);
	count++
});

    