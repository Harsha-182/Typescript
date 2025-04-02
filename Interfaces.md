# Interfaces in TypeScript

## Introduction
Interfaces in TypeScript define the structure of an object, enforcing type safety by specifying required properties and their types.

## Defining an Interface
An interface is defined using the `interface` keyword.
```typescript
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user: User = {
  name: "Alice",
  age: 25,
  isAdmin: true,
};
```

## Optional and Readonly Properties
- **Optional properties (`?`)** can be omitted.
- **Readonly properties (`readonly`)** cannot be modified after initialization.
```typescript
interface Car {
  readonly model: string;
  year?: number;
}

let myCar: Car = { model: "Toyota" };
// myCar.model = "Honda"; // Error: Cannot assign to 'model'
```

## Function Types in Interfaces
Interfaces can define function signatures.
```typescript
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 10)); // Output: 15
```

## Extending Interfaces
Interfaces can inherit properties from other interfaces using `extends`.
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = { name: "Buddy", breed: "Labrador" };
```

## Implementing Interfaces in Classes
Classes can enforce structure by implementing interfaces.
```typescript
interface Person {
  name: string;
  speak(): void;
}

class Employee implements Person {
  constructor(public name: string) {}
  speak() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

## Conclusion
- Interfaces provide a blueprint for object structures.
- Support optional and readonly properties.
- Enable function and class enforcement.
- Allow extension for reusability and maintainability.

Using interfaces enhances code clarity, type safety, and scalability in TypeScript projects.
