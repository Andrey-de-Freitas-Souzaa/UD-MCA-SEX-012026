let produtos = [
  { nome: 'Camiseta', preco: 49.90, estoque: 100 },
  { nome: 'Calça Jeans', preco: 120.00, estoque: 50 },
  { nome: 'Tênis', preco: 199.99, estoque: 30 },
  { nome: 'Boné', preco: 29.90, estoque: 80 },
  { nome: 'Jaqueta', preco: 250.00, estoque: 20 },
  { nome: 'Meias', preco: 15.00, estoque: 200 },
  { nome: 'Shorts', preco: 60.00, estoque: 70 },
  { nome: 'Camisa Polo', preco: 89.90, estoque: 40 },
  { nome: 'Blusa', preco: 70.00, estoque: 60 },
  { nome: 'Moletom', preco: 150.00, estoque: 25 }
];

produtos[1].preco

produtos[2].nome

produtos.length

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log(totalEstoque);

let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maior.estoque) {
    maior = produtos[i];
  }
}

console.log(maior);

let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maior.estoque) {
    maior = produtos[i];
  }
}

console.log(maior);