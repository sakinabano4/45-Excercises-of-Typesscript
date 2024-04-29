//creating a function with the parameters which return a value in string
function city_country(city: string, country: string) : string{
    return`${city} , ${country}`;
}
// calling a function and print the returned value
city_country("Karachi" , "Pakistan");
console.log (city_country("Karachi" , "Pakistan"));


city_country("Tokya", "Japan");
console.log(city_country("Tokya", "Japan"));
console.log(city_country("Berlin", "Germany"));
