"use strict";

let name = prompt("Wat is je naam?");
console.log(name);

document.getElementById("1").innerHTML = name;
document.getElementById("3").innerHTML = document.getElementById("2").innerHTML;