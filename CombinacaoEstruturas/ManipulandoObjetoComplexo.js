const empresa = {
	nome: "Empresa Exemplo",
	departamentos: [
	  {
	    nome: "Recursos Humanos",
	    funcionarios: [
	      { nome: "Ana Silva", cargo: "Gerente de RH" },
	      { nome: "Carlos Oliveira", cargo: "Analista de RH" }
	    ]
	  },
	  {
	    nome: "Tecnologia da Informação",
	    funcionarios: [
	      { nome: "Marcos Souza", cargo: "Desenvolvedor Frontend" },
	      { nome: "Júlia Almeida", cargo: "Analista de Suporte" }
	    ]
	  },
	  {
	    nome: "Marketing",
	    funcionarios: [
	      { nome: "Laura Martins", cargo: "Gerente de Marketing" },
	      { nome: "Pedro Santos", cargo: "Designer Gráfico" }
	    ]
	  }
	]
      };
 for (const key in empresa) {
	if (key == 'departamentos') {
		for (const departamento of empresa.departamentos) {
			for (const funcionario of departamento.funcionarios) {
				console.log(`O departamento ${departamento.nome} tem os funcionários: ${funcionario.nome}`);
			}
			
		}
	}
 }     