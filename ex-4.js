// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
while(i < restaurants.length){
    restaurants[i] = "Restaurant Name: " + restaurants[i];
    newRestaurants.push(restaurants[i]);
    i++;
}

console.log(newRestaurants);
