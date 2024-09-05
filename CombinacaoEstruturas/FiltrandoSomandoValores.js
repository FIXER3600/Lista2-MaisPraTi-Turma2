const transacoes = [
	{ tipo: 'entrada', valor: 100.00 },
	{ tipo: 'saida', valor: 50.00 },
	{ tipo: 'entrada', valor: 200.00 },
	{ tipo: 'saida', valor: 75.00 }
    ];
    
    let saldoFinal=0
transacoes.forEach(transacao => {

	if (transacao.tipo == 'entrada') {
		saldoFinal+=transacao.valor
	}
	if (transacao.tipo == 'saida') {
		saldoFinal-=transacao.valor
	}
});
console.log("O saldo final das transações é de: ",saldoFinal);
