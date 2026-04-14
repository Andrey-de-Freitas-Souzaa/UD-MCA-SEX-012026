let produto = {
  nome: 'Camiseta',
  cor: 'Preta',
  preco: 49.90,
  estoque: 120
};

produto.nome

produto['preco']

produto.estoque = 80;

for (let chave in produto) {
  console.log(chave + ': ' + produto[chave]);
}