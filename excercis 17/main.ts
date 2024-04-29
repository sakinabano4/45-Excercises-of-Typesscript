//Creating a Guest List Array 
let guestlist = ["Surayya","Arzo","Afsha","Nosheen"];

//Making variable for those guest who cant come
let dontCome = guestlist[0];

//Print the Name of guest who cant come 
console.log(dontCome,"nahi Ahha Sakhtti");

//Add or Remove Values from Guest list Array
guestlist.splice(0,1, "Ammir");

//Message Print for Bigger Table
console.log("Good News ! We have found a Bigger Table For Dinner,");

// Adding a new guest at starting index of array
guestlist.unshift("Ali");

//Adding a new guest at ending index of arry
guestlist.push("Zain");

//get a middle index of our guestlist array 
let middleindex: number = Math.floor(guestlist.length/2); 

//Adding a new guest to middle index array
guestlist.splice(middleindex, 0,"Osman",);

//print massege of Updated List
console.log("Updated list of our Guests");

//sending a invitation message to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you likedinner with me`));

//inform that only two guestscan be invited for dinner
console.log("unfortunately,the new dinner table wont arrive on time ,so I can only invite two guests to diner with me ");

while(guestlist.length >2) {
let removedGuest = guestlist.pop();
console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
    
}
// sending a invitation to the last two guest on the list
console.log("invitation to the last 2 guest" );
guestlist.forEach(lasttwo =>console.log (`luckly ${lasttwo}, you are still invited to dinner`));

//Removing last two Guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);