# Classes in TypeScript

## Introduction
Classes in TypeScript provide a blueprint for creating objects. They support features like inheritance, access modifiers, and constructors to enforce structured programming.

## Defining a Class
A basic class includes properties and methods.
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let person = new Person("Alice", 25);
console.log(person.introduce());
```

## Classes & Access Modifiers
Access modifiers define the visibility of class members:
- **`public`** (default) - Accessible from anywhere.
- **`private`** - Accessible only within the class.
- **`protected`** - Accessible within the class and derived classes.
```typescript
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
```

## Getters and Setters
Encapsulate property access using `get` and `set`.
```typescript
class Account {
  private balance: number = 0;

  get getBalance(): number {
    return this.balance;
  }

  set deposit(amount: number) {
    this.balance += amount;
  }
}

let myAccount = new Account();
myAccount.deposit = 1000;
console.log(myAccount.getBalance); // Output: 1000
```

## Abstract Classes & Inheritance
### Inheritance
A class can inherit properties and methods from another class using `extends`.
```typescript
class Animal {
  constructor(public name: string) {}
  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

let myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark!
```

### Abstract Classes
Abstract classes cannot be instantiated and must be extended.
```typescript
abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move(): void {
    console.log("The car is driving.");
  }
}

let myCar = new Car();
myCar.move(); // Output: The car is driving.
```

## Interfaces vs Abstract Classes
### Interfaces
- Define only the structure (method signatures and properties) without implementation.
- Cannot have constructors or concrete methods.
- Can be implemented by multiple classes.
```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Meow");
  }
}
```

### Abstract Classes
- Can define both method signatures and concrete methods.
- Can include constructors.
- Support single inheritance, meaning a class can extend only one abstract class.
```typescript
abstract class Bird {
  abstract fly(): void;
  eat(): void {
    console.log("Eating...");
  }
}

class Sparrow extends Bird {
  fly(): void {
    console.log("Flying high");
  }
}
```

### Key Differences
| Feature | Interface | Abstract Class |
|---------|-----------|---------------|
| Implementation | Only method signatures | Can have concrete methods |
| Constructors | Not allowed | Allowed |
| Multiple Inheritance | Can implement multiple interfaces | Can extend only one abstract class |
| Use Case | Enforcing structure | Providing base functionality |

## Conclusion
- **Classes** provide a structured way to create objects.
- **Access Modifiers** (`public`, `private`, `protected`) control member visibility.
- **Inheritance** enables code reuse and hierarchy.
- **Abstract classes** enforce method implementation in derived classes.
- **Interfaces** define a contract for objects without implementation.

Using TypeScript classes, access modifiers, and abstract structures improves code maintainability and scalability.
