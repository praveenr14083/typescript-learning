let a: number = 10;
a = 30;
// a="Praveen" //Error

const userName: string = "Praveen";
// userName = "Praveen R" // Error

const user = { id: 1, name: "Praveen" };
user.name = "John";
console.log(user, typeof user); // { id: 1, name: 'John' } object

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works (var leaks out of block)
}
test();

function test2() {
  if (true) {
    let y = 20;
  }
  //   console.log(y); // ❌ Error: y not defined
}

interface User {
  readonly id: number; // cannot be changed after creation
  name: string;
}

let users: User = { id: 1, name: "Praveen" };

users.name = "Kumar"; // ✅ allowed
// users.id = 2; ❌ Error: Cannot assign to 'id' because it is a read-only property
