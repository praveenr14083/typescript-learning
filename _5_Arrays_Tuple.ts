// Array Types
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "mango"];

// Multidimensional Arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix[1][2]); // 6

// Tuples (Fixed-length arrays)
let person: [string, number] = ["Rahul", 25];

// Tuple Optional & Rest Elements
// Optional element
let employee: [string, number?, boolean?];
employee = ["Praveen"];
employee = ["Praveen", 101, true];

// Rest element
let rgb: [number, number, ...number[]];
rgb = [255, 100, 50, 200, 180]; // first two fixed, rest unlimited
