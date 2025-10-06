// Numeric Enums
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
console.log(Direction[2], typeof Direction[2]); // Left string

// Custom start value
enum Status {
  Active = 1,
  Inactive, // 2
  Pending, // 3
}

console.log(Status[1]); // Active

// String Enums
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

console.log(Roles); // "ADMIN"

// Heterogeneous Enums (not recommended usually).
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No); // 0
console.log(Mixed.Yes); // "YES"

// Computed Enums
function getRandom() {
  return Math.random() * 10;
}

enum Computed {
  A = 1,
  B = A * 2,
  C = Math.floor(getRandom()), // computed at runtime
}

console.log(Computed.B); // 2

// Constant Enums
const enum Colors {
  Red,
  Green,
  Blue,
}

let favorite: Colors = Colors.Green;

console.log(favorite); // 1 (compiled directly as number)
