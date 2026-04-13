//criando um array com 21 iten de tecnologia
let dispositivos = [
    'Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Monitor', 
    'Teclado', 'Mouse', 'Impressora', 'Roteador', 'Headset',
    'Câmera', 'Microfone', 'Caixa de Som', 'HD Externo', 'Pendrive',
    'Console', 'Controle', 'Projetor', 'Scanner', 'Servidor'
];

//-----------------------------------------------
console.log("\nA. Qual elemento está nas posições 0, 7, 11, 15, 18 e 20.")
console.log("Posição 0:", dispositivos[0]); //Smartphone
console.log("Posição 7:", dispositivos[7]); //Impressora
console.log("Posição 11:", dispositivos[11]); // Microfone
console.log("Posição 15:", dispositivos[15]); // Console
console.log("Posição 18:", dispositivos[18]); // Scanner
console.log("Posição 20:", dispositivos[20]); //Undefined

//-----------------------------------------------
console.log("\nB. Qual elemento está na penúltima e última posição")
console.log("Penúltima:", dispositivos[dispositivos.length - 2]);
console.log("Última:", dispositivos[dispositivos.length - 1]);

//-----------------------------------------------
console.log("\nTotal de elementos")
console.log("Total de dispositivos:", dispositivos.length);

//-----------------------------------------------
console.log("\nD. Adicionando novo elemento")
dispositivos.push('Óculos VR');
console.log("Elemento [Óculos VR] adicionado")

//-----------------------------------------------
console.log("\nE. Imprimindo todos com loop for")
for (let i = 0; i < dispositivos.length; i++) {
    console.log(`Dispositivo ${i}: ${dispositivos[i]}`);
}