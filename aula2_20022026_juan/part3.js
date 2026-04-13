// T2 - Array de Objetos
// Criando um array com 10 objetos simples
let mochila = [
    { nome: 'Caderno', preco: 20, estoque: 5 },
    { nome: 'Caneta Azul', preco: 2, estoque: 50 },
    { nome: 'Estojo', preco: 15, estoque: 10 },
    { nome: 'Borracha', preco: 1, estoque: 30 },
    { nome: 'Régua', preco: 3, estoque: 15 },
    { nome: 'Lápis', preco: 1, estoque: 40 },
    { nome: 'Apontador', preco: 4, estoque: 20 },
    { nome: 'Tesoura', preco: 7, estoque: 8 },
    { nome: 'Cola', preco: 5, estoque: 12 },
    { nome: 'Corretivo', preco: 6, estoque: 10 }
];

console.log("\nA. Qual é o preço do segundo objeto? (Caneta Azul)")
console.log("Preço do segundo item:", mochila[1].preco);

console.log("\nB. Qual é o nome do terceiro objeto? (Estojo)")
console.log("Nome do terceiro item:", mochila[2].nome);

console.log("\nC. Quantos itens existem no array?")
console.log("Quantidade de tipos de itens:", mochila.length);

console.log("\nD. Imprima o nome de todos os objetos")
console.log("Itens na mochila:");
mochila.forEach(item => console.log("- " + item.nome));

console.log("\nE. Some o total de estoque de todos os objetos")
let totalEstoque = 0;
for (let i = 0; i < mochila.length; i++) {
    totalEstoque += mochila[i].estoque;
}
console.log("Total de objetos no estoque:", totalEstoque);

console.log("\nF. Qual objeto possui maior estoque?")
let maiorItem = mochila[0];
for (let i = 1; i < mochila.length; i++) {
    if (mochila[i].estoque > maiorItem.estoque) {
        maiorItem = mochila[i];
    }
}
console.log("Item em maior quantidade:", maiorItem.nome, "com", maiorItem.estoque, "unidades.");