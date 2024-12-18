const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];
console.log("Frase :", arrFrase); 

const fraseCompleta = arrFrase.reduce((acumulador, palabra) => acumulador + " " + palabra);
console.log("Frase reconstruida:", fraseCompleta); 

const arrFraseInvertida = [...arrFrase].reverse(); 
const fraseInvertida = arrFraseInvertida.join(" "); 
console.log("Frase invertida:", fraseInvertida);

const contieneBella = arrFrase.includes("bella");
console.log("¿Contiene 'bella'?", contieneBella);
