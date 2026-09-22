"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript  built on top of javascript,typescript is superset of javascript has everything feature that has javascript..
//Any javascript code valid typescript code..
let age = 20;
// 1. Variables
let name = "Harsh";
let age = 22;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

// 2. Basic operations
let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 3. Conditional statement
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 4. Function
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

// 5. Function
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Harsh"));

// 6. Array
let numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(numbers[0]);

// 7. Array methods
numbers.push(60);
numbers.pop();

console.log(numbers);

// 8. Loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 9. for...of loop
for (let number of numbers) {
    console.log("Number:", number);
}

// 10. String array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 11. map()
let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log("Doubled:", doubled);

// 12. Arrow function
let squared = numbers.map(number => number * number);

console.log("Squared:", squared);

// 13. filter()
let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even:", evenNumbers);

// 14. find()
let result = numbers.find(number => number > 30);

console.log("First number > 30:", result);

// 15. reduce()
let total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);

// 16. Object
let user = {
    id: 1,
    name: "Harsh",
    age: 22,
    email: "harsh@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user.email);

// 17. Object function
function printUser(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

printUser(user);

// 18. Array of objects
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },
    {
        id: 2,
        name: "Mouse",
        price: 800
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500
    }
];

// 19. Loop through objects
for (let product of products) {
    console.log(product.name);
    console.log(product.price);
}

// 20. Filter products
let expensive = products.filter(
    product => product.price > 1000
);

console.log("Expensive products:", expensive);

// 21. Calculate total price
let totalPrice = products.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log("Total Price:", totalPrice);

// 22. Destructuring
let { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);

// 23. Spread operator
let moreNumbers = [...numbers, 70, 80, 90];

console.log(moreNumbers);

// 24. Rest parameter
function calculateSum(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(calculateSum(10, 20, 30, 40));

// 25. Class
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(
            `${this.name} earns ₹${this.salary}`
        );
    }
}

let employee = new Employee("Amit", 50000);

employee.display();