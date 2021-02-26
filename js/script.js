/*
 chiedere all’utente il
numero di chilometri che vuole
percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà
calcolare il prezzo totale del viaggio.
l prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
*/


// 1 chiedere il numero dei km che si vuole percorrere
var km = parseInt(prompt ("inserire i km che si vogliono percorrere"));
if ( isNaN (km) ) {
  km = parseInt(prompt ("inserire i km che si vogliono percorrere: inserire un numero!"));
}

var costokm = ( km * 0.21 );

// 2 chiedere letà del passeggero
var eta = parseInt(prompt ("inserire la propria età"));
if ( isNaN (eta) ) {
  eta = parseInt(prompt ("inserire la propria età: deve essere un numero!"));
}

// 3 calcolare il prezzo totale del viaggio
if ( eta >= 18 && eta <= 65 ) {
  alert( "Questo è il prezzo del tuo biglietto " + costokm + " euro");
} else if ( isNaN(eta) ) {
  alert("hai di nuovo sbagliato! Ricarica la pagina")
}

  else if ( eta <= 18 ) {
  alert( "Questo è il prezzo del tuo biglietto " + (costokm - ( costokm / 100 * 20)) + " euro" );
}
  else if ( isNaN(eta) ) {
    alert("hai di nuovo sbagliato! Ricarica la pagina")
}

  else if (eta >= 65) {
  alert( "Questo è il prezzo del tuo biglietto " + (costokm - ( costokm / 100 * 40)) + " euro" );
}
  else if ( isNaN(eta) ) {
    alert("hai di nuovo sbagliato! Ricarica la pagina")
}
