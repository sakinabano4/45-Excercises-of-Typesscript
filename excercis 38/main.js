"use strict";
// Deccribe a Function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
