// ============================================
// T2 - Parte 2: Objeto
// ============================================

let camiseta = {
  nome: 'Camiseta Polo',
  cor: 'Azul',
  preco: 89.90,
  estoque: 45
};

// ----------------------------------------
// A. Como acessar o nome do objeto?
// ----------------------------------------
console.log('=== A. Acessando o nome do objeto ===');
console.log('Nome:', camiseta.nome); // notação de ponto

// ----------------------------------------
// B. Como acessar o preço usando colchetes?
// ----------------------------------------
console.log('\n=== B. Acessando o preço com colchetes ===');
console.log('Preço:', camiseta['preco']); // notação de colchetes

// ----------------------------------------
// C. Atualize o estoque para 80
// ----------------------------------------
console.log('\n=== C. Atualizando o estoque ===');
console.log('Estoque antes:', camiseta.estoque); // 45
camiseta.estoque = 80;
console.log('Estoque depois:', camiseta.estoque); // 80

// ----------------------------------------
// D. Imprima todas as propriedades no console
// ----------------------------------------
console.log('\n=== D. Todas as propriedades do objeto ===');
console.log('Nome:    ', camiseta.nome);
console.log('Cor:     ', camiseta.cor);
console.log('Preço:   ', camiseta.preco);
console.log('Estoque: ', camiseta.estoque);

// Alternativa usando for...in para iterar todas as propriedades:
console.log('\n--- Usando for...in ---');
for (let propriedade in camiseta) {
  console.log(`${propriedade}: ${camiseta[propriedade]}`);
}
