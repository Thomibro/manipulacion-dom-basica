// Los arrays se posicionan con numeros a partir del "0" en adelante
var frutas = ["Manzana", "Banana", "Frutilla", "Naranja"];
frutas[2]; // Como llamar un objeto dentro de un array

// Para conocer el largo del array utilizoo ".lenght()"
frutas.length();

// Con "push" se añade un nuevo objeto al final del array
var masFrutas = frutas.push("Uvas");

// Con "pop" se elimina el último objeto del array
var ultimo = frutas.pop("Uvas");

// Con "unshift" se agrega un nuevo objeto al inicio del array
var nuevaLongitud = frutas.unshift("Mandarina");

// Con "shift" se elimina el primer objeto del array
var borrarFruta = frutas.shift("Mandarina")

// Para conocer la posición de un objeto en concreto se usa "indexOf".(para saber el index de un elemento de mi array)
var posicion = frutas.indexOf("Frutilla")