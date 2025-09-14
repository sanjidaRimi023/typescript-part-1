"use strict";
// Basic Types in TypeScript
// Primitive vs Reference Types
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Reference Type Example
let a = [1, 2, 3, 4, 5];
let b = a;
b.pop(); //last digit delete
console.log(b);
/*
If we try to delete the last element of "b", like this:
b.pop(); // b = [1, 2, 3, 4]

You might expect "a" to remain [1, 2, 3, 4, 5],
but actually "a" also becomes [1, 2, 3, 4].

Reason: Arrays, objects, and functions in JavaScript/TypeScript
are **reference types**. When you assign "a" to "b",
both "a" and "b" point to the same memory location.
So changing the content of "b" affects "a" as well.

NOTE: {}, [], and () are reference types.
Any modification to a child (element/property) in the reference
will reflect in the parent as well.
*/
let char = ["a", "b", "c", "d"];
let char2 = char;
char2.pop();
console.log(char2);
let decimalNum = [1.3, 3.4, 5.6, 7];
let decimalNum2 = decimalNum;
decimalNum2.push(3);
console.log(decimalNum2);
// 2 .Primitive Type Example
let money = 20; // number
let MyName = "rimi"; // string
let isSingle = true; // boolean
console.log(money, MyName, isSingle); // 20 'rimi' true
/*
Difference between Primitive and Reference Types:

- Primitive types (number, string, boolean, null, undefined, symbol) are copied **by value**.
  This means when you assign one variable to another, a **new copy** is created.

- Reference types (objects, arrays, functions) are copied **by reference**.
  When you assign one variable to another, both variables point to the **same memory location**.
*/
// Primitive Example:
let number = 12;
let number2 = number;
number2 = 15; // changing number2 doesn't affect number
console.log(number); // 12
console.log(number2); // 15
// Reference Example:
let a1 = [1, 2, 3];
let b1 = a1;
b1.push(4); // modifying b also affects a
console.log(a1); // [1, 2, 3, 4]
console.log(b1); // [1, 2, 3, 4]
// TypeScript is very curious about your variable types
// Array Examples
let arr = [1, 2, 3, 3];
// TypeScript automatically infers this as number[] (array of numbers)
let arr2 = [1, 2, 3, 3, "rimi"];
// TypeScript infers this as (number | string)[]
// → array of numbers OR strings
let arr3 = [1, 2, 3, 3, { friendName: "badhon" }];
// TypeScript infers this as (number | { friendName: string })[]
// → array of numbers OR objects with friendName as string
//If you want strict type control
let arr4 = [1, 2, 3, 3];
// Only numbers are allowed
/* If you try this:
=> arr4.push("rimi");
=>TypeScript will throw an error:
=>"Argument of type 'string' is not assignable to parameter of type 'number'."
/ Basically it says: "Are you crazy? I already know arr4 should only have numbers"*/
// Tuples in TypeScript
/*
Tuples are like arrays, but with a twist:
- In normal arrays, you can put numbers, strings, objects in any order.
- In tuples, **you define exactly what type goes at each position**.
*/
// Example: a tuple with a string first, number second
let tuplesArr = ["rimi", 34];
//Correct: string first, number second
console.log(tuplesArr[0]); // "rimi"
console.log(tuplesArr[1]); // 34
// Wrong: number first, string second
// let tuplesArr: [string, number] = [34, "rimi"];
// TypeScript will throw an error:
// "Type 'number' is not assignable to type 'string'"
// Tuples are like a strict seat assignment in a bus:
// Seat 1 → string
// Seat 2 → number
// If anyone sits in the wrong seat, TypeScript will stop you
// "enumeration" short form of Enum
// Enums = a way to give friendly names to numbers or string values
// Imagine about your relationship status
var RelationshipStatus;
(function (RelationshipStatus) {
    RelationshipStatus[RelationshipStatus["Single"] = 0] = "Single";
    RelationshipStatus[RelationshipStatus["Dating"] = 1] = "Dating";
    RelationshipStatus[RelationshipStatus["Engaged"] = 2] = "Engaged";
    RelationshipStatus[RelationshipStatus["Married"] = 3] = "Married";
})(RelationshipStatus || (RelationshipStatus = {}));
// By default:
// Single = 0
// Dating = 1
// Engaged = 2
// Married = 3
let myStatus = RelationshipStatus.Single;
console.log(myStatus); // 1
console.log(RelationshipStatus[myStatus]); // "Dating"
// You can also use string enum for readability
var StatusString;
(function (StatusString) {
    StatusString["Single"] = "SINGLE";
    StatusString["Dating"] = "DATING";
    StatusString["Engaged"] = "ENGAGED";
    StatusString["Married"] = "MARRIED";
})(StatusString || (StatusString = {}));
let yourStatus = StatusString.Dating;
console.log(yourStatus); // "ENGAGED"
// A real life example about enum
// Imagine you are working in a company where you deal with website status codes
// Instead of remembering 404, 500, 200 etc...
// You can use enum to make it easier to understand
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
// Now you can use it like this
let currentStatus = StatusCode.NotFound;
console.log(currentStatus);
// Output: 404 (but instead of writing 404 directly,
// we used a readable name `StatusCode.NotFound`)
// Another example:
if (currentStatus === StatusCode.NotFound) {
    console.log("Oops..!The page is not found!");
}
else if (currentStatus === StatusCode.ServerError) {
    console.log("Oh no..!Server crashed!");
}
else {
    console.log("All good");
}
// any
// 'any' means TypeScript won’t check the type.
// It's like saying: "Bro, don’t stress me with types."
let randomValue = "Hello";
randomValue = 123; // works
randomValue = true; // works
console.log(randomValue); // can be anything
// unknown
// 'unknown' is like 'any' but safer.
// You must check its type before using.
let mystery = "Developer";
mystery = 42;
// console.log(mystery.toUpperCase()); ERROR
// TypeScript: "Wait! What if it's not a string?"
// // if we set a variable type 'any', TypeScript shuts down its brain.
// It says: "Bro, my brain is not brain-ing right now, do whatever you want!"
// It will allow anything without warnings.
if (typeof mystery === "string") {
    console.log(mystery.toUpperCase()); // Safe now
}
// void
// Used for functions that don’t return anything.
function greet() {
    console.log("Hello programmer");
}
greet(); // Prints but doesn’t return anything
// undefined
// Means no value is assigned.
let notDefined = undefined;
console.log(notDefined); //prints undefined
// null
// Example: Imagine you have a database with a user:
// name: "rimi", address: "Bangladesh"
// But if you search for owner: "chatgpt"
// and there is no user in the database with that owner,
// the database will return 'null'. 
// In other words, null represents an **intentional empty value**.
let emptyValue = null;
console.log(emptyValue); // prints null
// never
// A function that never returns.
// Either throws an error or runs forever.
function throwError(message) {
    throw new Error(message); //crashes, never returns
}
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Looping forever");
//   }
// }
//# sourceMappingURL=type.js.map