// String 
let userName:string = "Praveen";
console.log(userName,typeof userName);

// Number
let userId:number = 12
console.log(userId,typeof userId);

// Boolean
let isBoolean:boolean = true;
console.log(isBoolean,typeof isBoolean);

// Null
let nullTest:null = null
console.log(nullTest,typeof nullTest); // null object

// Undefined
let undefinedCheck:undefined = undefined;
console.log(undefinedCheck,typeof undefinedCheck); // undefined undefined

// Any
let anyType:any = "Praveen";
anyType = 20;
console.log(anyType,typeof anyType); //20 number

// unknown
let unknownType:unknown = "Praveen";
// unknownType = 123
if (typeof unknownType === "string") {
  console.log(unknownType.toUpperCase()); //PRAVEEN
}

// Never
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Somthing went wrong");

// Void
const greeting = (name:string):void => {
    console.log(`${name} Good morning!`);
}

greeting("Praveen");