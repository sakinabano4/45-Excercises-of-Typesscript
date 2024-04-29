// Define the function to show magicians names

function show_magicians(magicians:string[]){
    magicians.forEach(name =>console.log(name));
}    
//Function to make magicians great through .map() it will modify arry    
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Difine an arry of magicians names
let magicians_name = [ "Harry Poter"," Aladin", "Ali Baba" ]

//call make_great functionto modify magicians names
let great_magicians = make_great(magicians_name);

// call show_magicians that show modified list of magicians
show_magicians(great_magicians)