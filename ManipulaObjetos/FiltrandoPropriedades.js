const produto={
	nome:"Feijão",
	valor:5.99,
	peso:500,
	altura: 10,
	largura: 50,
	profundidade: 30
}
function filtraObjeto(objeto,valorMinimo) {
	let novoObjeto={}
	for (const key in objeto) {
		if (objeto[key] > valorMinimo) {
			novoObjeto[key]=valorMinimo
		}
	}
	return novoObjeto
}
let valorMinimo = 20;
let resultado = filtrarPropriedades(produto, valorMinimo);

console.log(resultado);