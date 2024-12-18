const numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array generado:", numeros);

const maxNumero = Math.max(...numeros);
console.log("Número más alto:", maxNumero);

const minNumero = Math.min(...numeros);
console.log("Número más bajo:", minNumero);

const numerosImpares = numeros.filter(num => num % 2 !== 0);
const cantidadImpares = numerosImpares.length;
console.log("Cantidad de números impares:", cantidadImpares);
