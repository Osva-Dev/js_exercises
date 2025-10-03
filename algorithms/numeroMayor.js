// ¿Cuál número es mayor entre dos números?

const firstNumber = Number(prompt("Ingresa el primer número"));
const secondNumber = Number(prompt("Ingresa el segundo número"));

function whichNumberIsGreater(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return "Por favor ingresa solo números válidos.";
  }

  if (x === y) {
    return "Ambos números son iguales.";
  } else if (x > y) {
    return "El primer número es mayor.";
  } else {
    return "El segundo número es mayor.";
  }
}

alert(whichNumberIsGreater(firstNumber, secondNumber));
