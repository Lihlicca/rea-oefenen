"use strict";

const naam = prompt("Naam") 
const age = prompt("leeftijd")
const woonplaats = prompt("woonplaats")

console.log(`Mijn naam is ${naam}, ik ben ${age} jaar oud en ik woon in ${woonplaats}.`);

document.getElementById("begroeting").innerHTML = `
    <p>Mijn naam is ${naam}</p>
    <p>Ik ben ${age} jaar oud</p>
    <p>Ik woon in ${woonplaats}</p>
`;
