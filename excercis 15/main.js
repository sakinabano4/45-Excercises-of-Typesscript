"use strict";
let guestlist = ["surraya", "Arzo", "Afsha", "Nosheen"];
let dontCome = guestlist[0];
console.log(dontCome, "nahi aha sakhtti");
guestlist.splice(0, 1, "Ammir");
guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me,`));
