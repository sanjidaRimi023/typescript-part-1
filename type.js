// Basic Types in TypeScript
// Primitive vs Reference Types
// Reference Type Example
var a = [1, 2, 3, 4, 5];
var b = a;
b.pop(); // sorting b will also affect a
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

NOTE: {}, [], and functions are reference types.
Any modification to a child (element/property) in the reference
will reflect in the parent as well.
*/
