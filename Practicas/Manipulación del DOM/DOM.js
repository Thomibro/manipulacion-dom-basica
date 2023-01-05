//Metodos para seleccionar los elementos que tenemos en el HTML y utilizarlos en JS.

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

console.log (input.value);

console.log ( {
    h1,
    p,
    parrafito,
    pid,
    input,
}); 


// Manipulación del DOM desde JavaScript

// Editar el HTML desde JavaScript
h1.innerText = 'Carrozas <br> En el mediocampo';
h1.innerHTML = 'Carrozas <br> En el mediocampo';

// Editar las clases de los elementos desde JS (recibir o dar una clase del HTML)
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'azul')

// Agregar y eliminar clases nuevas o viejas a elementos del HTML
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('rojo');

// Cambiar atributos de input desde JS
input.value ="3"


// Crear elementos nuevos desde JS
const img = document.createElement('img');
img.setAttribute('src', 'https://s1.sportstatics.com/relevo/www/multimedia/202212/31/media/cortadas/enzo-fernandez-argentina_20221231192710-RFNUJWkoPlnKJaUkzCG25qI-720x960@Relevo.jpg?cw=414&ch=552&img=default')
console.log(img);

// Eliminar todo lo que este por dentro del HTML con "innerHTML"
pid.innerHTML = "";

// Agregar un elemento desde JS al HTML sin reescribirlo
pid.append(img); 
//pid.appendChild(img);