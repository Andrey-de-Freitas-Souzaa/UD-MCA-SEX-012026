// Criação do Array de Objetos
let inventario = [
    { nome: 'Teclado Mecânico', preco: 250, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120, estoque: 30 },
    { nome: 'Monitor 24"', preco: 800, estoque: 10 },
    { nome: 'Headset', preco: 180, estoque: 22 },
    { nome: 'Cadeira Gamer', preco: 1200, estoque: 5 },
    { nome: 'Webcam', preco: 200, estoque: 18 },
    { nome: 'Microfone', preco: 350, estoque: 8 },
    { nome: 'Gabinete', preco: 400, estoque: 12 },
    { nome: 'Placa de Vídeo', preco: 2500, estoque: 3 },
    { nome: 'SSD 1TB', preco: 300, estoque: 40 }
];
  
console.log("\n--- PARTE 3: ARRAY DE OBJETOS ---");

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log(`A) Preço do segundo objeto (${inventario[1].nome}): R$ ${inventario[1].preco}`);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log(`B) Nome do terceiro objeto: ${inventario[2].nome}`);

// C. Quantos itens existem no array?
console.log(`C) Quantidade de itens no array: ${inventario.length}`);

// D. Imprima o nome de todos os objetos.
console.log("D) Nome de todos os produtos:");
for (let i = 0; i < inventario.length; i++) {
    console.log(`   - ${inventario[i].nome}`);
}
  
// E. Some o total de estoque de todos os objetos.
let totalEstoque = 0;
for (let i = 0; i < inventario.length; i++) {
    totalEstoque += inventario[i].estoque;
}
console.log(`E) Soma total do estoque: ${totalEstoque} unidades`);
  
// F. Qual objeto possui maior estoque?
let produtoMaiorEstoque = inventario[0]; // Assumimos que o primeiro é o maior inicialmente
  
for (let i = 1; i < inventario.length; i++) {
    if (inventario[i].estoque > produtoMaiorEstoque.estoque) {
        produtoMaiorEstoque = inventario[i];
    }
}
console.log(`F) O produto com maior estoque é '${produtoMaiorEstoque.nome}' com ${produtoMaiorEstoque.estoque} unidades.`);