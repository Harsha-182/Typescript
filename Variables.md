# Variables in TypeScript

## Overview
In TypeScript, variables are used to store values, similar to JavaScript, but with additional type safety. TypeScript provides different ways to declare variables with strict type enforcement, improving code reliability and maintainability.

## Declaring Variables in TypeScript
TypeScript offers three main ways to declare variables:

1. **var** - Function-scoped (deprecated in modern TypeScript)
2. **let** - Block-scoped, recommended for mutable values
3. **const** - Block-scoped, used for immutable values

### Example:
```typescript
var globalVar: string = "I am a var variable";
let blockScoped: number = 42;
const immutableValue: boolean = true;

console.log(globalVar, blockScoped, immutableValue);
```
## Diff between any and unknown
```typescript
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
```

## Type Annotations
TypeScript allows explicit type annotations to enforce the expected type of a variable.

```typescript
let message: string = "Hello, TypeScript!";
let count: number = 10;
let isActive: boolean = true;
```

## Type Inference
TypeScript can infer the type based on the assigned value.

```typescript
let username = "Harsh"; // TypeScript infers as string
type User = { name: string; age: number };
let user: User = { name: "Harsh", age: 25 }; // Custom Type
```

## Union Types
Variables can hold multiple types using the union (`|`) operator.

```typescript
let id: number | string;
id = 101; // valid
id = "ABC123"; // valid
```

## Any Type
Using `any` disables type checking, but it's not recommended for type safety.

```typescript
let randomValue: any = "Hello";
randomValue = 10; // No error, but avoids type safety
```

## Application of Variables in TypeScript
- **Strong Typing:** Reduces runtime errors by catching them during development.
- **Intelliscense:** Shows the related inbuilt functions
- **Code Readability:** Improves code clarity by explicitly defining variable types.
- **Scalability:** Helps in managing large-scale applications by enforcing strict type rules.
- **Performance Optimization:** Helps TypeScript compilers optimize the code for better execution.

## Conclusion
Understanding TypeScript variables and their types enhances code quality and maintainability. TypeScript enforces strong typing, which helps developers catch potential errors early in the development process.
