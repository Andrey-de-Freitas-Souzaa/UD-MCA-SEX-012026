// ============================================
// T2 - Parte 1: Array Simples
// ============================================

let frutas = [
  'Maçã',       // 0
  'Banana',     // 1
  'Laranja',    // 2
  'Uva',        // 3
  'Manga',      // 4
  'Abacaxi',    // 5
  'Morango',    // 6
  'Melancia',   // 7
  'Pêra',       // 8
  'Pêssego',    // 9
  'Kiwi',       // 10
  'Coco',       // 11
  'Limão',      // 12
  'Goiaba',     // 13
  'Mamão',      // 14
  'Cereja',     // 15
  'Amora',      // 16
  'Framboesa',  // 17
  'Abacate',    // 18
  'Caju'        // 19
];

// ----------------------------------------
// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// ----------------------------------------
console.log('=== A. Elementos por posição ===');
console.log('Posição 0:', frutas[0]);   // Maçã
console.log('Posição 7:', frutas[7]);   // Melancia
console.log('Posição 11:', frutas[11]); // Coco
console.log('Posição 15:', frutas[15]); // Cereja
console.log('Posição 18:', frutas[18]); // Abacate
console.log('Posição 20:', frutas[20]); // undefined (não existe ainda)

// ----------------------------------------
// B. Qual elemento está na penúltima e última posição?
// ----------------------------------------
console.log('\n=== B. Penúltima e última posição ===');
console.log('Penúltima posição:', frutas[frutas.length - 2]); // Abacate
console.log('Última posição:', frutas[frutas.length - 1]);    // Caju

// ----------------------------------------
// C. Quantos elementos existem no array?
// ----------------------------------------
console.log('\n=== C. Quantidade de elementos ===');
console.log('Total de elementos:', frutas.length); // 20

// ----------------------------------------
// D. Adicione um novo elemento ao final do array
// ----------------------------------------
console.log('\n=== D. Adicionando novo elemento ===');
frutas.push('Pitanga');
console.log('Elemento adicionado: Pitanga');
console.log('Novo total de elementos:', frutas.length); // 21
console.log('Último elemento agora:', frutas[frutas.length - 1]); // Pitanga

// ----------------------------------------
// E. Imprima todos os elementos usando um for
// ----------------------------------------
console.log('\n=== E. Todos os elementos do array ===');
for (let i = 0; i < frutas.length; i++) {
  console.log(`Posição ${i}: ${frutas[i]}`);
}