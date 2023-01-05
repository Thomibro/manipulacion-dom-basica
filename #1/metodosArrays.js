// Construcción de objetos
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

// Metodo "Filter".filter(). Este valida si algo es verdad o falso.(devuelve los valores coincidentes en una matriz de la colección y devolverá los valores coincidentes en una matriz.)
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Metodo "Map" .map(). Sirve para mapear un array.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// Metodo "Find" .find(). Sirve para encontrar un objeto en especifico. (devuelve el primer valor que coincide de la colección)
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

// Metodo "For Each" .forEach(). Filtrar objetos. (No genera un nuevo array como los demas)
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Metodo "Some" .some(). Devuelve un valor verdadero o falso y sirve para filtralos, en este caso la condición de artbaratos es "true".
var articulosBaratos = articulos.some(function(){
    return articulos.costo <= 700;
}); 