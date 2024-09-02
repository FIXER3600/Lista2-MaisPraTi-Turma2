let alunos = [
	{
	    nome: "Carlos",
	    nota1: 8.5,
	    nota2: 7.0
	},
	{
	    nome: "Mariana",
	    nota1: 9.0,
	    nota2: 8.5
	},
	{
	    nome: "Rafael",
	    nota1: 6.0,
	    nota2: 7.5
	},
	{
	    nome: "Fernanda",
	    nota1: 7.5,
	    nota2: 8.0
	},
	{
	    nome: "Lucas",
	    nota1: 9.5,
	    nota2: 9.0
	}
    ];
    
for (const aluno of alunos) {
	let media=(aluno.nota1 + aluno.nota2)/2

	console.log(`O aluno ${aluno.nome} teve média ${media}`);
	
}
    