const palabras = ['hola', 'adios', 'diez', 'javi', 'salvador', 'arrays', 'daw'];
console.log("Palabras originales:", palabras);

const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log("Palabras con más de 5 letras:", palabrasLargas);

const palabrasInvertidas = palabras.map(palabras => palabras.split('').reverse().join(''));
console.log("Palabras invertidas:", palabrasInvertidas);

const palabrasOrdenadas = palabrasInvertidas.sort((a, b) => a.length - b.length);
console.log("Palabras ordenadas por longitud:", palabrasOrdenadas);
