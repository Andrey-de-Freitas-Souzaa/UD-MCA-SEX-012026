// ============================================
// T2 - Parte 3: Array de Objetos
// ============================================

let produtos = [
  { nome: 'Notebook',      preco: 3200.00, estoque: 15 },  // 0
  { nome: 'Mouse',         preco: 89.90,   estoque: 80 },  // 1
  { nome: 'Teclado',       preco: 149.90,  estoque: 60 },  // 2
  { nome: 'Monitor',       preco: 1200.00, estoque: 20 },  // 3
  { nome: 'Headset',       preco: 299.90,  estoque: 35 },  // 4
  { nome: 'Webcam',        preco: 199.90,  estoque: 50 },  // 5
  { nome: 'Mousepad',      preco: 49.90,   estoque: 120 }, // 6
  { nome: 'Hub USB',       preco: 79.90,   estoque: 45 },  // 7
  { nome: 'Suporte Notebook', preco: 129.90, estoque: 30 },// 8
  { nome: 'Cadeira Gamer', preco: 1890.00, estoque: 8 }    // 9
];

// ----------------------------------------
// A. Qual é o preço do segundo objeto?
// ----------------------------------------
console.log('=== A. Preço do segundo objeto ===');
console.log('Preço do segundo objeto (índice 1):', produtos[1].preco);

// ----------------------------------------
// B. Qual é o nome do terceiro objeto?
// ----------------------------------------
console.log('\n=== B. Nome do terceiro objeto ===');
console.log('Nome do terceiro objeto (índice 2):', produtos[2].nome);

// ----------------------------------------
// C. Quantos itens existem no array?
// ----------------------------------------
console.log('\n=== C. Quantidade de itens no array ===');
console.log('Total de itens:', produtos.length);

// ----------------------------------------
// D. Imprima o nome de todos os objetos
// ----------------------------------------
console.log('\n=== D. Nome de todos os produtos ===');
for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto ${i + 1}: ${produtos[i].nome}`);
}

// ----------------------------------------
// E. Some o total de estoque de todos os objetos
// ----------------------------------------
console.log('\n=== E. Total de estoque geral ===');
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log('Total em estoque (todos os produtos):', totalEstoque);

// ----------------------------------------
// F. Qual objeto possui maior estoque?
// ----------------------------------------
console.log('\n=== F. Produto com maior estoque ===');
let indiceMaiorEstoque = 0;

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > produtos[indiceMaiorEstoque].estoque) {
    indiceMaiorEstoque = i;
  }
}

console.log('Produto com maior estoque:', produtos[indiceMaiorEstoque].nome);
console.log('Quantidade em estoque:', produtos[indiceMaiorEstoque].estoque);
