// Object Type Annotations
let user: { name: string; age: number; isAdmin: boolean };

user = {
  name: "Praveen",
  age: 25,
  isAdmin: true,
};
console.log(user, typeof user); // { name: 'Praveen', age: 25, isAdmin: true } object

// Interfaces (interface)
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const person: User = {
  name: "Rahul",
  age: 30,
  isAdmin: false,
};

// Optional Properties (?)
interface Product {
  id: number;
  name: string;
  description?: string; // optional
}

const item1: Product = { id: 1, name: "Laptop" };
const item2: Product = { id: 2, name: "Phone", description: "Latest model" };

// Readonly Properties
interface Config {
  readonly appName: string;
  version: number;
}

const settings: Config = {
  appName: "MyApp",
  version: 1,
};

settings.version = 2; // ✅ Allowed
// settings.appName = "New"; // ❌ Error: Cannot assign to 'appName'

console.log(settings); // { appName: 'MyApp', version: 2 }

// Extending Interfaces
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "Golden Retriever",
};

// Index Signatures
interface StringMap {
  [key: string]: string; // any key, value must be string
}

const colors: StringMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};
console.log(colors, typeof colors); // { red: '#ff0000', green: '#00ff00', blue: '#0000ff' } object

interface NumberArray {
  [index: number]: number;
}

const scores: NumberArray = [90, 85, 78];
console.log(scores, typeof scores); // [ 90, 85, 78 ] object
