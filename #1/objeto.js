// Como construir un objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
};

// Para poder acceder a los valores y metodos de un objeto utilizo:
miAuto.marca
miAuto.detalleDelAuto();