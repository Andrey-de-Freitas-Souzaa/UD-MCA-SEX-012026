// Criação do Array com 21 elementos
let tecnologias = [
    'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 
    'PHP', 'Swift', 'Go', 'Rust', 'C++', 
    'HTML', 'CSS', 'SQL', 'React', 'Vue', 
    'Angular', 'Node.js', 'Docker', 'Git', 'AWS', 
    'Linux'
];
  
console.log("--- PARTE 1: ARRAY SIMPLES ---");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log(`A) Posição 0: ${tecnologias[0]}`);   // JavaScript
console.log(`   Posição 7: ${tecnologias[7]}`);   // Go
console.log(`   Posição 11: ${tecnologias[11]}`); // CSS
console.log(`   Posição 15: ${tecnologias[15]}`); // Angular
console.log(`   Posição 18: ${tecnologias[18]}`); // Git
console.log(`   Posição 20: ${tecnologias[20]}`); // Linux

// B. Qual elemento está na penúltima e última posição?
// Penúltima: length - 2 | Última: length - 1
console.log(`B) Penúltima posição: ${tecnologias[tecnologias.length - 2]}`); // AWS
console.log(`   Última posição: ${tecnologias[tecnologias.length - 1]}`);    // Linux

// C. Quantos elementos existem no array?
console.log(`C) Total de elementos: ${tecnologias.length}`); // 21

// D. Adicione um novo elemento ao final do array.
tecnologias.push('TypeScript');
console.log(`D) Elemento adicionado! Novo tamanho: ${tecnologias.length}`);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos:");
for (let i = 0; i < tecnologias.length; i++) {
    console.log(`   [${i}] ${tecnologias[i]}`);
}