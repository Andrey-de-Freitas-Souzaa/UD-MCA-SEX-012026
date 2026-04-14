let frutas = [
  'Maçã',
  'Banana',
  'Laranja',
  'Uva',
  'Manga',
  'Abacaxi',
  'Morango',
  'Pera',
  'Melancia',
  'Kiwi',
  'Cereja',
  'Limão',
  'Acerola',
  'Goiaba',
  'Maracujá',
  'Mamão',
  'Figo',
  'Caqui',
  'Graviola',
  'Jabuticaba'
];

/*Posição 0 → Maçã
Posição 7 → Pera
Posição 11 → Limão
Posição 15 → Mamão
Posição 18 → Graviola
Posição 20 → ❌ Não existe (o array vai até a posição 19)*/

/*Penúltimo → Graviola (posição 18)
Último → Jabuticaba (posição 19)*/

frutas.length

frutas.push('Pitaya');
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}