//Solicitar la edad (numero entero) y determinar si esta en el rango de 18 - 25 años.

const age = Number(prompt("Ingresa tu edad."));

function rangeAge(x) {
  if (x >= 18 && x <= 25) {
    return "Cumple con el rango de edad";
  } else {
    return "No cumple con el rango de edad";
  }
}

alert(rangeAge(age));
