/*
  Es werden die beiden IDs der beiden Textboxen �bergeben
  Dann wird mit dem Befehl    parseInt(document.getElementById(parameter_1).value)     aus den IDs jeweils die Zahl generiert
  Danach werden die beiden Zahlen addiert
  Ausgabe der Zwischenergebnisse erfolgt mit alert
*/
function plus(parameter_1, parameter_2)
{
   alert("Parameter 1 = " + parameter_1);
   alert("Parameter 2 = " + parameter_2);

   zahl_1 = parseInt(document.getElementById(parameter_1).value);
   zahl_2 = parseInt(document.getElementById(parameter_2).value);

   alert("Zahl 1 = " + zahl_1);
   alert("Zahl 2 = " + zahl_2);

   ergebnis = zahl_1 + zahl_2;

   alert("Ergebnis = " + ergebnis);
}

function minus(parameter_1, parameter_2)
{
   alert("Parameter 1 = " + parameter_1);
   alert("Parameter 2 = " + parameter_2);

   zahl_1 = parseInt(document.getElementById(parameter_1).value);
   zahl_2 = parseInt(document.getElementById(parameter_2).value);

   alert("Zahl 1 = " + zahl_1);
   alert("Zahl 2 = " + zahl_2);

   ergebnis = zahl_1 - zahl_2;

   alert("Ergebnis = " + ergebnis);
}
function geteilt(parameter_1, parameter_2) {
  alert("Parameter 1 = " + parameter_1);
  alert("Parameter 2 = " + parameter_2);

  zahl_1 = parseInt(document.getElementById(parameter_1).value);
  zahl_2 = parseInt(document.getElementById(parameter_2).value);

  if (zahl_2 === 0) {
      alert("Dividend kann nicht durch Null dividiert werden");
  } else {
      alert("Zahl 1 = " + zahl_1);
      alert("Zahl 2 = " + zahl_2);
      ergebnis = zahl_1 / zahl_2;
      alert("Ergebnis = " + ergebnis);
  }
}


function mal(parameter_1, parameter_2)
{
   alert("Parameter 1 = " + parameter_1);
   alert("Parameter 2 = " + parameter_2);

   zahl_1 = parseInt(document.getElementById(parameter_1).value);
   zahl_2 = parseInt(document.getElementById(parameter_2).value);

   alert("Zahl 1 = " + zahl_1);
   alert("Zahl 2 = " + zahl_2);

   ergebnis = zahl_1 * zahl_2;

   alert("Ergebnis = " + ergebnis);
}