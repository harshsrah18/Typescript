//Typescript  built on top of javascript,typescript is superset of javascript has everything feature that has javascript..
//Any javascript code valid typescript code..
let age: number = 20;

// 1. Basic variables
let name: string = "Harsh";
let age: number = 22;
let isStudent: boolean = true;

// 2. Type inference
let city = "Nagpur";
let marks = 85;

// 3. Arrays
let numbers: number[] = [10, 20, 30, 40, 50];
let fruits: string[] = ["Apple", "Banana", "Mango"];

// 4. Tuple
let student: [string, number] = ["Rahul", 21];

// 5. Enum
enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.User;

// 6. Function with types
function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));

// 7. Function with string
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet(name));

// 8. Optional parameter
function welcome(name: string, age?: number): string {
    if (age) {
        return `${name} is ${age} years old`;
    }
    return `Hello ${name}`;
}

console.log(welcome("Amit"));
console.log(welcome("Ravi", 25));

// 9. Default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log("Multiply:", multiply(5));

// 10. Union type
let id: number | string = 101;
id = "USER101";

console.log("ID:", id);

// 11. Type alias
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

let user: User = {
    id: 1,
    name: "Harsh",
    email: "harsh@gmail.com",
    age: 22
};

console.log(user);

// 12. Function using object type
function printUser(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}

printUser(user);

// 13. Interface
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

let product: Product = {
    id: 101,
    name: "Laptop",
    price: 55000,
    inStock: true
};

console.log(product);

// 14. Array of objects
let products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 800,
        inStock: true
    }
];

// 15. Loop
for (let product of products) {
    console.log(product.name, product.price);
}

// 16. Map
let prices: number[] = products.map(product => product.price);

console.log("Prices:", prices);

// 17. Filter
let expensiveProducts = products.filter(
    product => product.price > 1000
);

console.log("Expensive:", expensiveProducts);

// 18. Class
class Employee {
    constructor(
        public name: string,
        public salary: number
    ) {}

    display(): void {
        console.log(
            `${this.name} earns ₹${this.salary}`
        );
    }
}

let employee = new Employee("Amit", 50000);
employee.display();

// 19. Generic function
function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst<number>(numbers));
console.log(getFirst<string>(fruits));

// 20. Final calculation
let total = prices.reduce(
    (sum, price) => sum + price,
    0
);

console.log("Total:", total);