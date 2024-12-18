const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numeros:", numeros);

const cuadrados = numeros.map(numero => numero ** 2);
console.log("Cuadrados:", cuadrados);

const pares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", pares);

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de los números:", suma);
