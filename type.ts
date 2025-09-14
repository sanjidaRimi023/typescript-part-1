// Basic Types in TypeScript
// Primitive vs Reference Types

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

let money: number = 20; // number
let MyName: string = "rimi"; // string
let isSingle: boolean = true; // boolean
console.log(money, MyName, isSingle); // 20 'rimi' true

/*
Difference between Primitive and Reference Types:

- Primitive types (number, string, boolean, null, undefined, symbol) are copied **by value**. 
  This means when you assign one variable to another, a **new copy** is created.

- Reference types (objects, arrays, functions) are copied **by reference**. 
  When you assign one variable to another, both variables point to the **same memory location**.
*/

// Primitive Example:
let number: number = 12;
let number2: number = number;

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
let arr4: number[] = [1, 2, 3, 3]; 
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

let tuplesArr: [string, number] = ["rimi", 34];

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
