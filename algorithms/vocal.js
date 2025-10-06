//Detectar si la letra ingresada es una vocal o no.

const letter = prompt("Ingrese una letra: ");
const mensage = " es una vocal";

function vocal(x) {
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
        return x + mensage + " mayuscula";
      default:
        return x + " no es una vocal";
    }
  }
}

alert(vocal(letter));
