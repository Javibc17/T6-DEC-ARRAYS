const ciudades = ["Madrid", "Barcelona", "Sevilla", "Valencia", "Málaga"];
console.log("Ciudades originales:", ciudades);

const ciudadesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase());
console.log("Ciudades en mayúsculas:", ciudadesMayusculas);

const ciudadesOrdenadas = ciudadesMayusculas.sort();
console.log("Ciudades ordenadas alfabéticamente:", ciudadesOrdenadas);

const algunaConM = ciudadesOrdenadas.some(ciudad => ciudad.startsWith("M"));
console.log("¿Alguna ciudad comienza con 'M'?", algunaConM);

const todasMasDe4 = ciudadesOrdenadas.every(ciudad => ciudad.length > 4);
console.log("¿Todas las ciudades tienen más de 4 caracteres?", todasMasDe4);
