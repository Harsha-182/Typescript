# Functions in TypeScript

## Introduction
Functions in TypeScript provide a structured way to encapsulate reusable logic. TypeScript enhances functions by adding static types, ensuring better code reliability and maintainability.

## Function Declaration
A basic function in TypeScript includes type annotations for parameters and the return type.
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

## Function Expressions
Functions can also be assigned to variables.
```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(5, 10)); // Output: 15
```

## Optional and Default Parameters
- **Optional Parameters:** Use `?` to mark parameters as optional.
```typescript
function greetUser(name: string, age?: number): string {
  return age ? `Hello, ${name}, you are ${age} years old.` : `Hello, ${name}!`;
}
console.log(greetUser("John"));
```
- **Default Parameters:** Provide default values.
```typescript
function greetPerson(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
console.log(greetPerson()); // Output: Hello, Guest!
```

## Function Overloading
TypeScript supports function overloading, allowing multiple function signatures.
```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine(10, 20)); // Output: 30
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
```

## Rest Parameters
Rest parameters allow functions to accept multiple arguments as an array.
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

## Conclusion
- TypeScript functions allow strong type checking for parameters and return values.
- Support optional and default parameters.
- Function overloading enhances flexibility.
- Rest parameters handle variable arguments efficiently.

By leveraging these features, TypeScript functions improve code clarity, maintainability, and type safety.
