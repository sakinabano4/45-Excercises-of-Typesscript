"use strict";
// Difine Veriable
let alienColor = "green";
// Using If and Else-If Statments
// Version 1
if (alienColor === "green") {
    console.log("(Version1) you shoot down green alien you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("you shoot down red alien you have earned 15 points");
}
// Version 2
let alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shoot down green alien you have earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("(Version2) you shoot down yellow alien you have earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("you shoot down red alien you have earned 15 points");
}
// Version 3
let alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shoot down green alien you have earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("(Version 3) you shoot down red alien you have earned 15 points");
}
