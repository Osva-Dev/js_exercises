//Detectar si la letra ingresada es una vocal minuscula

var letter = prompt("Ingrese una letra: ");

function vocal(x) {
  var mensage = " es una vocal";

  {
    switch (x) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return x + mensage + " minuscula";
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        return x + mensage + " mayuscyla";
      default:
        return x + " no es una vocal";
    }
  }
}

alert(vocal(letter));
