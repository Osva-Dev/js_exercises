//Detectar si la letra ingresada es una vocal minuscula

var letter = prompt("Ingrese una letra: ");

function vocal(x) {
  var mensage = " es una letra minuscula";

  if (!x) {
    return "Valor no ingresado";
  } else {
    switch (x) {
      case "a":
        return x + mensage;
      case "e":
        return x + mensage;
      case "i":
        return x + mensage;
      case "o":
        return x + mensage;
      case "u":
        return x + mensage;
      default:
        return x + " no es una vocal minuscula";
    }
  }
}

alert(vocal(letter));
