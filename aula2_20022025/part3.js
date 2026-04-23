let produtos = [
    { nome: 'PlayStation 5', preco: 4500, estoque: 10 },
    { nome: 'Xbox Series X', preco: 4300, estoque: 8 },
    { nome: 'Nintendo Switch', preco: 2500, estoque: 15 },
    { nome: 'Controle PS5', preco: 300, estoque: 50 },
    { nome: 'Controle Xbox', preco: 280, estoque: 40 },
    { nome: 'Headset Gamer', preco: 200, estoque: 35 },
    { nome: 'Teclado Mecânico', preco: 350, estoque: 25 },
    { nome: 'Mouse Gamer', preco: 150, estoque: 60 },
    { nome: 'Monitor Gamer', preco: 1200, estoque: 12 },
    { nome: 'Cadeira Gamer', preco: 900, estoque: 5 }
];

// A
console.log("Preço do segundo:", produtos[1].preco);

// B
console.log("Nome do terceiro:", produtos[2].nome);

// C
console.log("Quantidade:", produtos.length);

// D
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
}

// E
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log("Total estoque:", totalEstoque);

// F
let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maior.estoque) {
        maior = produtos[i];
    }
}

console.log("Maior estoque:", maior);