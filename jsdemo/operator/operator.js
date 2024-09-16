// Destructuring
let student1 = {
    username: "Kimleang",
    age: 19,
    address: {
        city: "Phnom Penh",
        
    }
}
let {username: firstname, age, address: {city}} = student1;
console.log(firstname, age, city)