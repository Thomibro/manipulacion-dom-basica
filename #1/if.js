//Condicional if
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, por primera vez")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar")
}


//Condicional condition
condition ? true : false;


var numero = 1;

var resultado = numero === 1 ? "Sí, soy un uno" : "No, no soy un uno"



var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";



user = prompt ("Elige")
var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};