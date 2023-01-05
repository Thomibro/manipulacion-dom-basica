const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Utilizar ".addEventListener" (metodo) para poder escuchar eventos (primer parametro) y ejecutar cualquier linea de codigo que se necesaria (segundo parametro), en este caso se ejecuta una función.
btn.addEventListener('click', sumarInputValues);


// Para poder cambiar los valores de input, que son "Strings", a numeros utilizamos "Number()" o "parseInt()"
function sumarInputValues(event) {
    //event.preventDeafult();
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs
}
 