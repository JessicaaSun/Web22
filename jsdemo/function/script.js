// parameter function
let heading = document.querySelector("h1");

function greet(firstname = "John", lastname = "Doe") {
  console.log(`Hello ${firstname} ${lastname}`);
  // heading.innerHTML = `Hello ${name}`
}
greet("Mary");

function sum(a = 5, b = 2) {
  let result;
  result = a + b;
  return result;
}

let resultSum = sum();
// console.log(result)

let divide = (x = 4, y = 2) =>{ return x /y};
let result = divide(5, 2);
console.log(result)

let age = 5;
let welcome = age < 18 ? 
    () => console.log("Baby") : 
    () => console.log("Adult");
welcome();

let student = {
    username: "John",
    printInfo: function() {
        console.log(this.username)
    }
}
student.printInfo()
