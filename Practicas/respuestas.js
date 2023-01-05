// Tipos de variables en javaScript
// Usamos 'let' para variables que pueden cambiar su valor en un futuro y usamos 'const' para variables que siempre tendran el mismo valor.
// Se recomienda dejar de usar 'var', ya que puede traer problemas en el futuro con nuevas versiones de "JS"

let nombre = 'Thomas';
const apellido = 'Holzmann';
// Aca tambien se puede utilizar 'let'
let username = 'Thomy.HZ';
let edad = '19';
let mail = 'thomasholz@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

// Concatenación de varibles para crear nuevas variables a partir de estas.
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;



// Funciones (encapsular bloques de codigo para reutilizarlos y ejecutarlos en el futuro)

// Construcción de una función con parámetros ("name" y "lastname")
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}
// Se envian argumentos al momento de ejecutar la función ("Simon" y "Pagano")
nombreCompleto('Simon', 'Pagano')

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}



// Condicionales. (ejecutar bloques de codigos mediante las condiciones o validaciones) If, else y else if, Switch
// Condicional "If" sirve para validar cosas completamente distintas en cada validación. En cambio el "Switch" todos los cases se comparan con la misma variable o condición.

const tipoDeSuscricion = "Basic";

   if(tipoDeSuscricion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscricion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscricion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else if (tipoDeSuscricion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} 


// Crear el mismo codigo de arriba pero sin el uso de "else if" o "else"

function conseguirTipoSuscrpcion (suscripcion) {
    if(suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }  
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } 
    if(suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    
    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscrpcion('Free');


// Replicar el mismo codigo pero solo usando un único "if"

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

// Utilizando objetos podemos simplificar el codigo. Aca cada nombre de propiedad es el nombre de la suscripcion y el valor de esta es el mensaje que va a devolver.
function conseguirTipoSuscrpcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }
    console.warn('Ese tipo de suscripción no existe')
}



// Ciclos, ejecutar bloques de codigos hasta que se cumpla una condición

let i = 0;
while (i < 5) {
    console.log("El valor de i  es:" + i);
    i++;
}

//Pregunta para usuarios

let respuesta;
while(respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2?')
    respuesta = pregunta;
}



// Array (listas de elementos)

const array = [1, 2, 3, {nombre: 'Simon', edad: 6}];

// Objeto (cada elemento tiene un nombre clave)

const obj = {
    nombre: 'Thomas',
    edad: 19,
    comidasFavoritas: ['Pizza', 'Asado']
};

// En el console.log se elige la posición del objeto que se quiere devolver
// En este caso saldria "Noah" (por la posición numero cero)
function imprimirPrimerElementoArray() {
    console.log(arr [0])
}

imprimirPrimerElementoArray(['Noah', 'Simon', 'Bengie'])



function imprimirElementoPorElemento (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirPrimerElementoArray(['Noah', 'Simon', 'Bengie'])


// Crea un array con las propiedades de un objeto. (arreglos)

const array = Object.values(obj)

function imprimirElementoPorElemento (arr) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}