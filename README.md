# TypeScript Part 1: The Fundamentals 🚀

Welcome to my repository for learning TypeScript! This file explains the basic types and concepts I've covered in Part 1. My goal is to explain each topic simply so that anyone can understand it.

TypeScript is a **superset of JavaScript** created by **Microsoft**.  
It allows **static typing**, **strict checks**, and supports **modern features** that help us write better and safer code.

## Why Use TypeScript?

-   **Catch Errors Early**: It finds mistakes in your code *before* you even run it.
-   **Better Autocomplete**: Your code editor gives you smarter suggestions, making coding faster.
-   **Clearer Code**: Types make your code easier for you and others to understand.

---

## Core Concepts

### Type Annotation

-   **What is it?**
    It's when you explicitly *tell* TypeScript what the type of a variable or function should be, using a colon `:`.
-   **Why use it?**
    It makes your code very clear and is necessary when TypeScript can't figure out the type on its own.
-   **When to use it?**
    1.  When you declare a variable but don't give it a value yet.
    2.  For function parameters and return values.
    ```typescript
    // 1. Declaring a variable without a value
    let playerName: string;
    playerName = "Alice";

    // 2. For function parameters and return values
    function add(num1: number, num2: number): number {
      return num1 + num2;
    }
    ```

### Type Inference

-   **What is it?**
    It's when TypeScript automatically *guesses* the type of a variable based on the value you assign to it.
-   **Why use it?**
    It keeps your code cleaner and requires less typing for simple and obvious cases.
-   **When to use it?**
    When you declare and initialize a variable on the same line.
    ```typescript
    let score = 100; // TypeScript infers this is a 'number'
    let greeting = "Hello, world!"; // TypeScript infers this is a 'string'
    ```

---

## Reference Types (`{}`, `[]`, `()`)

-   **What is it?** This refers to how data is stored in memory. Primitives (`string`, `number`) are stored by **value** (you get a copy). Reference types (`object`, `array`, `function`) are stored by **reference** (you get a pointer to the original).
-   **Why is it important?** Understanding this prevents bugs. If you change a copied reference type, you are also changing the original, which might be an unexpected side effect.
-   **When to be aware of it?** Always, but especially when passing objects or arrays to functions. If the function modifies that object, it modifies the original one outside the function too.
    ```typescript
    let person1 = { name: "Rimi" };
    let person2 = person1; // person2 now POINTS to the same object as person1

    person2.name = "Sanjida"; // We modified the object through person2

    console.log(person1.name); // Outputs: "Sanjida" (The original was changed!)
    ```

## Primitive Types (The Basic Building Blocks)

### `string`, `number`, & `boolean`

-   **What are they?** The most basic data types for storing text, numbers, and true/false values.
-   **Why use them?** To ensure a variable holds only one kind of basic data. This prevents errors like trying to do math (`5 + "hello"`) by mistake.
-   **When to use them?** All the time! For storing names (`string`), ages (`number`), or if a user is logged in (`boolean`).
    ```typescript
    let movieTitle: string = "The Matrix";
    let releaseYear: number = 1999;
    let isGood: boolean = true;
    ```

### `Array`

-   **What is it?** A list of items that are all of the same type.
-   **Why use it?** It guarantees that every item in the list is the correct type. You can't accidentally add a `string` to a list of `number`s.
-   **When to use it?** For any ordered list of data, like a list of user scores, product names, or to-do items.
    ```typescript
    // An array that can ONLY hold numbers
    let scores: number[] = [98, 75, 89, 100];

    // An array that can ONLY hold strings (alternative syntax)
    let fruits: Array<string> = ["apple", "banana", "cherry"];
    ```

### `Tuple`

-   **What is it?** A special type of array that has a **fixed length** and where the **type of each element is known** and fixed in a specific order.
-   **Why use it?** It's much stricter than a regular array. It ensures you have the right number of elements and each element is of the correct type for its position.
-   **When to use it?** When you need to store a small, fixed set of related data together, like RGB color values or a user's ID and name.
    ```typescript
    // A tuple for a user: [id, name]
    let user: [number, string] = [101, "John Doe"];

    // user[0] must be a number
    // user[1] must be a string
    // user.push("another string"); // This is a known loophole, but accessing user[2] will give an error.
    ```

### `Enum` (Enumeration)

-   **What is it?** A way to create a set of friendly, named constants. Behind the scenes, these are often numbers.
-   **Why use it?** It makes your code more readable and prevents errors from using magic numbers. Instead of checking if `user.role === 0`, you can check if `user.role === UserRole.Admin`, which is much clearer.
-   **When to use it?** When a variable can only be one of a few possible values, such as user roles (`Admin`, `Editor`, `Guest`), game difficulty (`Easy`, `Medium`, `Hard`), or directions (`North`, `South`, `East`, `West`).
    ```typescript
    enum UserRole {
      Admin,  // Gets value 0
      Editor, // Gets value 1
      Guest   // Gets value 2
    }

    let currentUserRole: UserRole = UserRole.Admin;
    console.log(currentUserRole); // Outputs: 0
    ```

---

## Special Types

### `any` 🚨

-   **What is it?** A type that tells TypeScript to **turn off all type-checking** for a variable. You can assign anything to it and do anything with it without getting an error from TypeScript.
-   **Why use it?** As an "escape hatch" when you are working with dynamic data, untyped third-party libraries, or slowly migrating old JavaScript code to TypeScript.
-   **When to use it?** **As a last resort!** Using `any` defeats the purpose of TypeScript, so avoid it whenever possible.
    ```typescript
    let flexible: any = "I am a string";
    flexible = 5; // No error
    flexible.nonExistentMethod(); // Also no error from TypeScript, but will crash when you run the code!
    ```

### `unknown` ✅

-   **What is it?** A safer alternative to `any`. It represents a value whose type you do not know ahead of time.
-   **Why use it?** It's safe because it forces you to check the type of the variable before you can perform any operations on it. This prevents runtime errors.
-   **When to use it?** When receiving data from an external source where the type isn't guaranteed, like a network API response or user input.
    ```typescript
    let userInput: unknown = 123;
    let userName: string;

    // userName = userInput; // Error! Can't assign 'unknown' to 'string'.

    if (typeof userInput === 'string') {
      userName = userInput; // This is OK, because we checked the type first!
    }
    ```

### `void`

-   **What is it?** A type that means "no return value".
-   **Why use it?** To clearly communicate that a function's purpose is to perform an action, not to return a result.
-   **When to use it?** As the return type for functions that don't return anything. For example, a function that just prints a message to the console.
    ```typescript
    function logMessage(message: string): void {
      console.log(`LOG: ${message}`);
      // There is no `return` statement.
    }
    ```

### `null` & `undefined`

-   **What are they?** Special types that represent the absence of a value.
-   **Why use them?** To explicitly state that a variable is empty (`null`) or has not yet been given a value (`undefined`).
-   **When to use them?** When a variable might not have a value. For example, a function that searches for a user might return a user object if found, or `null` if not found.
    ```typescript
    let user = findUser("Alex"); // This could be a user object or null
    if (user === null) {
      console.log("User not found!");
    }
    ```

### `never`

-   **What is it?** A type that represents a value that should **never** happen.
-   **Why use it?** It indicates that a function will never have a normal completion. It will not reach its endpoint.
-   **When to use it?** As the return type for a function that **always** throws an error or one that contains an infinite loop.
    ```typescript
    function throwError(message: string): never {
      throw new Error(message);
    }
    ```

---
