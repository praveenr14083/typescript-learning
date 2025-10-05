// Functions in TypeScript
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(5, 10)); // 15

const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(4, 3)); // 12

// Optional and Default Parameters
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}`;
}

console.log(greet("Praveen")); // Hello Praveen
console.log(greet("Praveen", 25)); // Hello Praveen, you are 25 years old.

function welcome(user: string, country: string = "India"): string {
  return `Welcome ${user} from ${country}`;
}

console.log(welcome("Rahul")); // Welcome Rahul from India
console.log(welcome("Alex", "USA")); // Welcome Alex from USA

// Rest Parameters (...)
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Return Type Annotations
function divide(a: number, b: number): number {
  return a / b;
}

function printMessage(msg: string): void {
  // void → no return
  console.log(msg);
}

// Function Overloading
function combine(a: number, b: number): number; // signature 1
function combine(a: string, b: string): string; // signature 2
function combine(a: any, b: any): any {
  // implementation
  return a + b;
}

console.log(combine(5, 10)); // 15
console.log(combine("Hello ", "TS")); // Hello TS
