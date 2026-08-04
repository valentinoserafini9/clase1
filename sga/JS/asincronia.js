// console.log("Inicio");

// setTimeout(() => {
//     console.log("Buscando alumno...");
// }, 3000);

// console.log("Fin");

// function saludar(){
//     console.log("Hola");
// }

// function ejecutar(funcion){
//     funcion();
// }

// ejecutar(saludar);

// function despedirse(){
//     console.log("Adiós");
// }

// setTimeout(despedirse, 3000);

// setTimeout(() => {
//     console.log("Buscando docentes...");
// }, 3000);

// setTimeout(() => {
//     console.log("Buscando materias...");
// }, 4000);

// setTimeout(() => {
//     console.log("Buscando cursos...");
// }, 4000);

console.log("Abriendo Sistema de Gestion Academica");
setTimeout(() => {
    console.log("Alumnos Cargados");
}, 3000);

console.log("El usuario pude seguir navegando");


// 1. Iniciamos la acción
console.log("Solicitando lista de alumnos...");

// 2. Configuramos la espera de 5 segundos (5000 milisegundos)
setTimeout(() => {
    console.log("Lista recibida");
}, 5000);

// 3. Este mensaje se mostrará inmediatamente después del primero, 
// demostrando que el programa sigue ejecutándose mientras espera los 5 segundos.
console.log("Miembros en espera... el programa sigue ejecutándose");