//Ingresa tres numeros y agrega uno mas, despues de leer el cuarto numero determinar si dicho numero coincide con alguno
// de los introducidos anteriormente

const firstNumber = parseFloat(prompt("Ingresa el primer numero: "));
const secondNumber = parseFloat(prompt("Ingresa el segundo numero: "));
const thirdNumber = parseFloat(prompt("Ingresa el tercer numero: "));
const fourthNumber = parseFloat(prompt("Ingresa el cuarto numero: "));

function theFourthNumberMatches(x, y, z, fourthNumber) {
  if (fourthNumber == x || fourthNumber == y || fourthNumber == z) {
    return "El cuarto numero ingresado coincide con alguno de los tres anteriores.";
  } else {
    return "El caurto numero ingresado no coincide con alguno de los tres anteriores.";
  }
}
