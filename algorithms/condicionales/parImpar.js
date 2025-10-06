//Determinar si un numero entero es par o impar

const number = Number(
  prompt("Agrega un numero para determinar si es par o impar")
);

function evenOrOdd(x) {
  if (isNaN(x)) {
    return "Por favor ingresa solo números válidos";
  }

  if (x === 0) {
    return "El numero 0";
  } else if (x % 2 == 0) {
    return x + " es numero par";
  } else {
    return x + " es numero impar";
  }
}

alert(evenOrOdd(number));
