// Define the function to show magicians names

function show_magicians(magicians:string[]){
    magicians.forEach(name =>console.log(name));
}    
//Function to make magicians great through .map() it will modify arry    
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Difine an arry of magicians names
let magicians_name = [ "Harry Poter","Aladin", "Ali Baba" ]

// Making a copy off Original array through .Slice() function
let copy_magician_names = magicians_name.slice()

//modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrrays Original and copied

// original
console.log("Orignal Array\n")
show_magicians(magicians_name);

//copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);



