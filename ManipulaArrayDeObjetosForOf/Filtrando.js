let funcionarios = [
	{
	    nome: "Ana",
	    cargo: "Gerente de Projetos",
	    salario: 8500
	},
	{
	    nome: "Carlos",
	    cargo: "Desenvolvedor Full Stack",
	    salario: 7000
	},
	{
	    nome: "Mariana",
	    cargo: "Analista de Marketing",
	    salario: 6000
	},
	{
	    nome: "Pedro",
	    cargo: "Designer Gráfico",
	    salario: 5500
	},
	{
	    nome: "Fernanda",
	    cargo: "Especialista em Recursos Humanos",
	    salario: 6500
	}
    ];
function filtraArrayObjetos(funcionarios,valorMinimo) {
	let novoArrayObjetos=[]
	for (const funcionario of funcionarios) {
		if (funcionario.salario > valorMinimo) {
			novoArrayObjetos.push(funcionario)
		}
	}
	return novoArrayObjetos
}
let valorMinimo = 6000;
let resultado = filtraArrayObjetos(funcionarios, valorMinimo);

console.log(resultado);