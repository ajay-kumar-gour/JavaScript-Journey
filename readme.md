# JavaScript Journey Repository 🚀

Welcome to the JavaScript Journey Repository! This repository is a place to explore the exciting world of JavaScript and its dynamic capabilities for building interactive and engaging web applications.

## About JavaScript

JavaScript is a synchronous, single-threaded language, meaning it processes one command at a time in a specific order. Widely used on the client side of web development, JavaScript adds interactivity and dynamic behavior to websites, making them more engaging for users.

## Variables in JavaScript 

Variables are essential containers for storing data values in JavaScript. Unlike statically typed languages like C or Java, JavaScript is dynamically typed, allowing flexibility without explicit data type declarations.

### Declaration of Variables

JavaScript provides three main keywords for declaring variables:

- **const**: Used for constants, where the value cannot be reassigned.
- **let**: Allows reassignment of values, suitable for variables with changing values.
- **var**: The old way of declaring variables, not commonly used in modern JavaScript.

### JavaScript Variable Declaration Comparison 📊

Understanding the differences between `var`, `let`, and `const` This table summarizes the key features of each:

| Feature          | `var`                              | `let`                                 | `const`                            |
| ---------------- | ---------------------------------- | ------------------------------------- | ---------------------------------- |
| **Scope**        | Function-scoped                    | Block-scoped                          | Block-scoped                       |
| **Reassignment** | Can be redeclared and reassigned   | Can be reassigned, but not redeclared | Cannot be reassigned or redeclared |
| **Hoisting**     | Hoisted to the top of the function | Hoisted to the top of the block       | Hoisted to the top of the block    |

### JavaScript Variable Declaration Examples 

Examples of variable declarations using `var`, `let`, and `const` in JavaScript, along with comments explaining their behavior and potential errors.

## Variable Declaration Summary

| Declaration Type | Variable Name | Initial Value | Action                           | Error (if any)                                               | Output (if no error) |
| ---------------- | ------------- | ------------- | -------------------------------- | ------------------------------------------------------------ | -------------------- |
| `var`            | `CEOname`     | "Robert"      | Declaration and assignment       | None                                                         | "Robert"             |
| `var`            | `CEOname`     | "Michael"     | Re-declaration and re-assignment | None                                                         | "Michael"            |
| `var`            | `CEOname`     | "Subramanian" | Re-assignment                    | None                                                         | "Subramanian"        |
| `let`            | `director`    | "Zachman"     | Declaration and assignment       | None                                                         | "Zachman"            |
| `let`            | `director`    | N/A           | Re-declaration (commented out)   | SyntaxError: Identifier 'director' has already been declared | None (due to error)  |
| `let`            | `director`    | "Crux"        | Re-assignment                    | None                                                         | "Crux"               |
| `const`          | `PII`         | 3.14          | Declaration and assignment       | None                                                         | 3.14                 |
| `const`          | `PII`         | N/A           | Re-declaration (commented out)   | SyntaxError: Identifier 'PII' has already been declared      | None (due to error)  |
| `const`          | `PII`         | N/A           | Re-assignment (commented out)    | TypeError: Assignment to constant variable.                  | None (due to error)  |
| `const`          | `age`         | N/A           | Declaration (commented out)      | SyntaxError: Missing initializer in const declaration        | None (due to error)  |

## Hoisting 🚀
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables or call functions in your code before they are declared.

# Hoisting Examples in JavaScript 

This section illustrates the concept of hoisting in JavaScript using examples with `var`, `let`, `const` and `functions`.



| Code                                       | Output                                      |
|--------------------------------------------|---------------------------------------------|
| `console.log("value of x before :", x);`   | x == undefined                              |
| `var x = 5;`                                |                                             |
| `console.log("value of x after :", x);`    | x == 5                                      |
| `console.log("value of hoistFun before (without func call) :", hoistFun);` | ƒ hoistFun() { console.log("Hola world"); } |
| `console.log("value of hoistFun ( with called function) before :", hoistFun());` | Hola world (and returns undefined)       |
| `function hoistFun() { console.log("Hola world"); }` |                                             |
| `console.log(hoistFun2());`                 | Holla World 2 (and returns true)            |
| `function hoistFun2() { console.log("Holla World 2"); return true; }` |                                     |
| `console.log(vulName);`                     | ReferenceError: Cannot access 'vulName' before initialization |
| `let vulName = "Apache Log4j";`             |                                             |
| `console.log(riskAttribute);`               | ReferenceError: Cannot access 'riskAttribute' before initialization |
| `const riskAttribute = "Critical";`         |                                             |


# JavaScript Data Types Overview 📚

### Primitive Types
In JavaScript, primitive types are simple, immutable data types directly operated upon by the language. They include String, Number, Boolean, Undefined, Null, and Symbol. Variables of primitive types directly store the data's actual value.

### Non-Primitive Types (Reference Types)
Non-primitive types, also known as reference types, are more complex data types that are mutable and can hold multiple values. They include Object, Array, Function, and others. Variables of non-primitive types store references or addresses that point to the actual data in memory. When you work with a non-primitive type, you are manipulating a reference to the data rather than the data itself.