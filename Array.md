# Data Structures in TypeScript

## Typed Arrays
Typed arrays ensure that all elements within an array conform to a specified type. TypeScript provides two ways to declare typed arrays:

1. **Using `Type[]` Syntax:**
   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   let names: string[] = ["Alice", "Bob", "Charlie"];
   ```

2. **Using `Array<Type>` Syntax:**
   ```typescript
   let numbers: Array<number> = [10, 20, 30];
   let words: Array<string> = ["Hello", "World"];
   ```

### Benefits of Typed Arrays
- Prevents incorrect data types from being assigned.
- Enables IntelliSense support in IDEs.
- Reduces runtime errors.

## Tuples
A **tuple** is a fixed-length array where each element has a predefined type. Unlike arrays, tuples enforce strict typing for each position.

### Example:
```typescript
let person: [string, number] = ["John", 25];
console.log(person[0]); // Output: "John"
console.log(person[1]); // Output: 25
```

### Key Features:
- Each element in a tuple has a fixed type.
- Order matters: `[string, number]` is different from `[number, string]`.
- Tuples can be useful for returning multiple values from functions.

## Objects with Types
TypeScript allows defining **typed objects** using interfaces or type aliases.

### Defining Object Types Using Interfaces
```typescript
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user: User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};
```

### Using Type Aliases
```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

let item: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
};
```

### Optional and Readonly Properties
- **Optional (`?`)** properties can be omitted.
- **Readonly (`readonly`)** properties cannot be changed after initialization.

```typescript
interface Car {
  readonly model: string;
  year?: number;
}

let myCar: Car = { model: "Toyota" };
// myCar.model = "Honda"; // Error: Cannot assign to 'model' because it is a read-only property
```

## Enums
Enums in TypeScript allow defining a set of named constants, improving code readability and maintainability.

### Numeric Enums
By default, numeric enums start from `0` and increment by `1`.
```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

### Custom Numeric Enums
You can manually assign values to enums.
```typescript
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(StatusCode.NotFound); // Output: 404
```

### String Enums
Enums can also store string values.
```typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Colors.Red); // Output: "RED"
```

### Key Benefits of Enums
- Improves code clarity by giving meaningful names to values.
- Reduces the use of magic numbers and hardcoded strings.
- Provides a predefined set of values for better type safety.

## Conclusion
- **Typed Arrays** ensure elements belong to a specific type.
- **Tuples** enforce fixed-length and type order.
- **Objects with types** provide a structured way to define entities, improving type safety and code maintainability.
- **Enums** allow defining a set of named constants for better readability and maintainability.

Using these TypeScript features enhances code readability, reduces errors, and helps build scalable applications.
