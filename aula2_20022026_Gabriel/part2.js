// Criação do Objeto
let smartphone = {
    nome: 'iPhone 15',
    cor: 'Preto',
    preco: 4500.00,
    estoque: 35
};
  
console.log("\n--- PARTE 2: OBJETO ---");
  
// A. Como acessar o nome do objeto?
// Usando a notação de ponto (dot notation)
console.log(`A) Nome do produto: ${smartphone.nome}`);
  
// B. Como acessar o preço usando colchetes?
// Usando a notação de colchetes (bracket notation)
console.log(`B) Preço do produto: R$ ${smartphone['preco']}`);

// C. Atualize o estoque para 80.
smartphone.estoque = 80;
console.log(`C) Estoque atualizado para: ${smartphone.estoque}`);

// D. Imprima todas as propriedades no console.
console.log("D) Propriedades do objeto:");
for (let propriedade in smartphone) {
    console.log(`   ${propriedade}: ${smartphone[propriedade]}`);
}