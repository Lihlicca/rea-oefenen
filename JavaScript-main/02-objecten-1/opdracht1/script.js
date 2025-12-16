"use strict";

const dog = {
    name: "Doggo", 
    age: 5, breed: "Border Collie", 
    hairColor: "black and white",
};

dog.age += 1;

dog.houseTrained = true;

console.log(dog)
let output = `Hello, my name is ${dog.name} and I am a very cute ${dog.age} year old ${dog.breed}. My fur is ${dog.hairColor}.`;

if (dog.houseTrained) {
    output += " and I am housetrained like a good boi.";
} else {
    output += " and unfortunately I still like to pee in my owner's shoes.";
}

document.getElementById("output").innerHTML = output;