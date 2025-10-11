//Simular un cajero automatico con un saldo incial de $1000 que permita realziar las siguientes acciones:
// Depositar, Retirar, salir

let saldo = 1000;
let ingresar;
let retirar;

let option = Number(
  prompt("Bienvenido que desea realziar: 1) Depositar 2) Retirar 3) Salir ")
);

switch (option) {
  case 1:
    ingresar = Number(
      prompt("Su saldo es de $" + saldo + " cuanto dinero desea ingresar?")
    );
    alert("Tu saldo es de " + (saldo + ingresar));
  case 2:
    retirar = Number(
      prompt("Su saldo es de $" + saldo + " cuanto dinero desea retirar?")
    );

    if (retirar > saldo) {
      alert("Tu saldo es de $" + saldo + " no puedes retirar $" + retirar);
    } else {
      alert("Dinero retirado, tu saldo actual es de $" + (saldo - retirar));
    }
  default:
    alert("Saliendo del sistema...");
}
