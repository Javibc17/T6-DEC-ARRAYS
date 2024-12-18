const arrEstudiantes = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 22, nota: 5 },
    { nombre: "María", edad: 19, nota: 7 },
    { nombre: "Carlos", edad: 21, nota: 4 }
];

const estudiantesAprobados = arrEstudiantes.filter(estudiante => estudiante.nota >= 5);
console.log("Estudiantes aprobados:", estudiantesAprobados);

const estudiantesOrdenados = [...arrEstudiantes].sort((a, b) => a.edad - b.edad);
console.log("Estudiantes ordenados por edad:", estudiantesOrdenados);

const nombresEstudiantes = arrEstudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:", nombresEstudiantes);

const notaPromedio = arrEstudiantes.reduce((total, estudiante) => total + estudiante.nota, 0) / arrEstudiantes.length;
console.log("Nota promedio:", notaPromedio);
