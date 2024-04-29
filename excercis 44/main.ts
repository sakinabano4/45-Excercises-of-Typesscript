//Difine a function with a rest parameter that accept items arugments representing our Sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleItem => console.log(singleItem));
    
    console.log("\nNow Enjoy Sandwich");
}

// call the function 3 time with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo","Egg","Chees","Chicken","Luttuce", "Tomato");