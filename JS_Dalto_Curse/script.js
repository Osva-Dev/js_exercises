// 3 chicos de 23 años entran a una heladería a comprar un helado pero hay un problema:
// Los precios no están al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, así que... veamos cómo podemos ayudarlos.

// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD

// Los precios de helados son los siguientes:
// 1) Palito de helado de agua: $0.6 USD
// 2) Palito de helado de crema: $1 USD
// 3) Bombón helado marca heladix: $1.6 USD
// 4) Bombón helado marca heladovich: $1.7 USD
// 5) Potecito de helado marca helardo: $1.8 USD
// 6) Potecito de helado con confites: $2.9 USD
// 7) Pote de 1/4 KG: $2.9 USD

// Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar.

let dineroRoberto = parseFloat(prompt("¿Cuánto dinero tiene Roberto?"));

if (dineroRoberto >= 0.6 && dineroRoberto <= 0.9) {
  alert("Roberto puede comprar el Palito de helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto <= 1.5) {
  alert("Roberto puede comprar el Palito de helado de crema");
} else if (dineroRoberto == 1.6) {
  alert("Roberto puede comprar el Bombón helado marca heladix");
} else if (dineroRoberto == 1.7) {
  alert("Roberto puede comprar el Bombón helado marca heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto <= 2.8) {
  alert("Roberto puede comprar el Bombón helado marca helardo");
} else if (dineroRoberto >= 2.9) {
  alert(
    "Roberto puede comprar el Potecito de helado con confites o el Pote de 1/4 Kg"
  );
} else {
  alert("Roberto no puede comprar ninguno");
}

let dineroPedro = parseFloat(prompt("¿Cuánto dinero tiene Pedro?"));

if (dineroPedro >= 0.6 && dineroPedro <= 0.9) {
  alert("Pedro puede comprar el Palito de helado de agua");
} else if (dineroPedro >= 1 && dineroPedro <= 1.5) {
  alert("Pedro puede comprar el Palito de helado de crema");
} else if (dineroPedro == 1.6) {
  alert("Pedro puede comprar el Bombón helado marca heladix");
} else if (dineroPedro == 1.7) {
  alert("Pedro puede comprar el Bombón helado marca heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro <= 2.8) {
  alert("Pedro puede comprar el Bombón helado marca helardo");
} else if (dineroPedro >= 2.9) {
  alert(
    "Pedro puede comprar el Potecito de helado con confites o el Pote de 1/4 Kg"
  );
} else {
  alert("Pedro no puede comprar ninguno");
}

let dineroCofla = parseFloat(prompt("¿Cuánto dinero tiene Cofla?"));

if (dineroCofla >= 0.6 && dineroCofla <= 0.9) {
  alert("Cofla puede comprar el Palito de helado de agua");
  alert("El cambio es: " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla <= 1.5) {
  alert("Cofla puede comprar el Palito de helado de crema");
  alert("El cambio es: " + (dineroCofla - 1));
} else if (dineroCofla == 1.6) {
  alert("Cofla puede comprar el Bombón helado marca heladix");
  alert("El cambio es: " + (dineroCofla - 1.6));
} else if (dineroCofla == 1.7) {
  alert("Cofla puede comprar el Bombón helado marca heladovich");
  alert("El cambio es: " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla <= 2.8) {
  alert("Cofla puede comprar el Bombón helado marca helardo");
  alert("El cambio es: " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
  alert(
    "Cofla puede comprar el Potecito de helado con confites o el Pote de 1/4 Kg"
  );
  alert("El cambio es: " + (dineroCofla - 2.9));
} else {
  alert("Cofla no puede comprar ninguno");
}
