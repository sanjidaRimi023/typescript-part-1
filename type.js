// Basic Types in TypeScript
// Primitive vs Reference Types
// Reference Type Example
var a = [1, 2, 3, 4, 5];
var b = a;
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
var char = ["a", "b", "c", "d"];
var char2 = char;
char2.pop();
console.log(char2);
var decimalNum = [1.3, 3.4, 5.6, 7];
var decimalNum2 = decimalNum;
decimalNum2.push(3);
console.log(decimalNum2);
// Primitive Type Example
var money = 20; // number
var MyName = 'rimi'; // string
var isSingle = true; // boolean
console.log(money, MyName, isSingle); // 20 'rimi' true
/*
Difference between Primitive and Reference Types:

- Primitive types (number, string, boolean, null, undefined, symbol) are copied **by value**.
  This means when you assign one variable to another, a **new copy** is created.

- Reference types (objects, arrays, functions) are copied **by reference**.
  When you assign one variable to another, both variables point to the **same memory location**.
*/
// Primitive Example:
var number = 12;
var number2 = number;
number2 = 15; // changing number2 doesn't affect number
console.log(number); // 12
console.log(number2); // 15
// Reference Example:
var a1 = [1, 2, 3];
var b1 = a1;
b1.push(4); // modifying b also affects a
console.log(a1); // [1, 2, 3, 4]
console.log(b1); // [1, 2, 3, 4]
