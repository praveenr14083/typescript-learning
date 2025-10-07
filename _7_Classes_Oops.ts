// Classes & OOP in TypeScript
class Person {
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const p1 = new Person("Praveen", 25);
p1.greet();

// Constructors & Parameter Properties
class Car {
  // `public` makes them class properties automatically
  constructor(public brand: string, private year: number) {}

  getDetails(): string {
    return `${this.brand} - ${this.year}`;
  }
}

const c1 = new Car("Toyota", 2022);
console.log(c1.getDetails());

// Access Modifiers
// public: accessible everywhere (default).
// private: accessible only inside the class.
// protected: accessible inside the class and its subclasses.
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, dept: string) {
    this.name = name;
    this.salary = salary;
    this.department = dept;
  }

  showSalary() {
    return this.salary; // ✅ allowed
  }
}

class Manager extends Employee {
  showDept() {
    return this.department; // ✅ allowed (protected)
  }
}

const emp = new Employee("Raj", 50000, "IT");
console.log(emp.name); // ✅ public
// console.log(emp.salary); // ❌ private

// readonly Modifier
class Book {
  readonly isbn: string;

  constructor(isbn: string) {
    this.isbn = isbn;
  }
}

const b1 = new Book("123-456");
// b1.isbn = "999"; ❌ Cannot assign to readonly

// Getters & Setters
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid amount");
    this._balance = amount;
  }
}

const acc = new BankAccount();
acc.balance = 1000;
console.log(acc.balance);

// Inheritance (extends)
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // from Animal
dog.bark(); // from Dog

// Abstract Classes
abstract class Shape {
  abstract area(): number; // must be implemented
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.area());

// Static Properties & Methods
class MathUtil {
  static PI = 3.14;

  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.add(10, 20));

// Method Overriding
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}

const obj = new Child();
obj.greet(); // Child’s version
