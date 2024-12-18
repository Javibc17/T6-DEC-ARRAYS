const array1 = [6, 1, 9, 4];
const array2 = [4, 6, 2, 8];

const sumaArrays = array1.map((num, index) => num + array2[index]);
console.log("Suma de arrays:", sumaArrays); 

const multiplicadosPorIndice = array1.map((num, index) => num * index);
console.log("Multiplicados por índice:", multiplicadosPorIndice); 

const indiceMayorADiez = sumaArrays.findIndex(num => num > 10);
console.log("Índice del primer número mayor a 10:", indiceMayorADiez); 
