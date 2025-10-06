//Ingresar un numero y determinar si es positivo o negativo

const number = Number(
  prompt("Ingresa un numero para determinar si es positivo o negativo: ")
);

function positiveOrNegative(x) {
  if (isNaN(x)) {
    return "Por favor ingresa solo números válidos";
  }

  if (x === 0) {
    return "El numero ingresado es 0 ";
  } else if (x > 0) {
    return x + " es numero par ";
  } else {
    return x + " es numero inpar";
  }
}

alert(positiveOrNegative(number));
