"use strict";

let output = prompt("Naam") + "<br>";
output += prompt("leeftijd") + "<br>";
output += prompt("woonplaats");

document.getElementById("output").innerHTML = output;

let x = 3;
x *= 3;
x *= 3;
x *= 3;
x *= 3;
console.log(x);
document.getElementById("x").innerHTML = x;