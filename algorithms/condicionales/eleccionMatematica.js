let option = prompt(
  "Elige una opcion: a) Cubo de un numero b) Numero par o impar x)Salir"
);

switch (option) {
  case "a":
    let cubo = Number(
      prompt("Ingrese un numero para determinar el cubo de dicho numero: ")
    );
    cubo = cubo * cubo * cubo;
    alert(cubo);
    break;
  case "b":
    const parImpar = Number(
      prompt("Ingresa un numero para determinar si es par o impar: ")
    );
    if (parImpar % 2 == 0) {
      alert(parImpar + " es un numero par.");
    } else {
      alert(parImpar + " es un numero inpar");
    }
    break;
  default:
    alert("Saliendo del sistema...");
}
