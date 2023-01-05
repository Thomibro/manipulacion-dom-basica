// Este es el constructor, la base para poder crear nuevos objetos
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

// Con "new" se puede crear un nuevo objeto a base de otro
var autoNuevo = new auto("Tesla", "Model 3", 2022);
var autoNuevo2 = new auto("Fiat", "147", 1999);
var autoNuevo3 = new auto("Ford", "Ecosport", 2006);


// Reto loop automatico

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Poner marca");
    var modelo = prompt("Poner modelo");
    var annio = prompt("poner año");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }