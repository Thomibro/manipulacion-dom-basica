// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

var a = 20;
var b = a + "";

// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

var c = String(a);
// String() combierte un numero en un String
var d = Number(c);
// Number() combierte un String en un numero
