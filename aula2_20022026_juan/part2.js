//T2 - Objeto
//-----------------------

//Criando Objeto
let dispositivo = {
    nome: 'Monitor Gamer',
    cor: 'Preto',
    preco: 1250.00,
    estoque: 15
};

console.log("\nA. Como acessar o nome do objeto?")
console.log("Nome do dispositivo:", dispositivo.nome);

console.log("\nB. Como acessar o preço usando colchetes?")
console.log('Preço:', dispositivo['preco']);

console.log("\nC. Atualize o estoque para 80.")
dispositivo.estoque = 80;
console.log('Estoque atualizado:', dispositivo.estoque); 

console.log("\nD. Imprima todas as propriedades no console.")
console.log("Dados atualizados:", dispositivo);