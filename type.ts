// Basic Types in TypeScript
// Primitive vs Reference Types

// Reference Type Example

let a = [1, 2, 3, 4, 5];
let b = a;

b.pop();  //last digit delete

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
