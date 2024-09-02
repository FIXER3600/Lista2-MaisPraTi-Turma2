// Criando o objeto carro
const carro = {
	marca: 'Toyota',
	modelo: 'Corolla',
	ano: 2020,
	cor: 'Prata'
    };
    
    // Usando for...in para iterar sobre as propriedades do objeto
    for (let propriedade in carro) {
	console.log(`${propriedade}: ${carro[propriedade]}`);
    }
    