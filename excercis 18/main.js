"use strict";
// Making a Array of countries and print its Orginal Order
let countriestovisit = ["China ", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriestovisit);
//print the Array in Alphabetical Order without modifying the actual Array List
console.log("Alphabetical Order:", [...countriestovisit].sort());
//show that the Array is still in its Orginal order
console.log("still in Orginal Order:", countriestovisit);
//print the Array in reversed Order without modifying the Actual Array List
console.log("Rvesrse Order:", [...countriestovisit].reverse());
//show that the array is still in its Orignal order
console.log("still in Orginal order:", countriestovisit);
// we have Changed the Orginal Array Order Now
console.log("Oroginal Rrray Reversed:", countriestovisit.reverse());
//print the array to show that it's back to its orginal order 
console.log("back to orginal order:", countriestovisit.reverse());
//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:", countriestovisit.sort());
// we have Changed the Orginal Array Order Now in reverse order again 
console.log("Oroginal Rrray Reversed Again:", countriestovisit.reverse());
