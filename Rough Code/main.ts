export {};

let string = "Hello, Buddy!";
console.log(string);

let a:number = 10;
let s:string = "Hello";
s = "kfdvbjk"

let b:boolean = true;
let c:string = `fdjvhbdjfb${b}`

console.log(c)

let arr: Array<any> = [1, 's' ,2,3,4,5]

console.log("arr", arr);

let tupple: [number, string] = [2, "baii"];

console.log("tupple", tupple);

enum Color{Red, Green, Blue};

let p:Color = Color.Red;
console.log("p", p);


let type:unknown=  10;

// (type as string).toUpperCase();

console.log("type", type);

// console.log(type.name);

function check(obj:any): obj is { name: string } {
    return obj && typeof obj === 'object' && obj.name !== undefined;
}

if(check(type)){
    console.log("type.name", type.name)
}

let j: string | number = 10;

const func = (a:string,b?:number) => {
    console.log(a, "Iam inside the function", b);
}

func("hii", 1);
// func(2,'Jack');

function combine(a:string, b:string):string;

function combine(a:number, b:number):number;

function combine(a:any, b:any):any{
    return a+b
}

console.log(combine(2,3));
console.log(combine('hii', 'jack'));
// console.log(combine(true, 'hii'));

interface Number{
    a:number
    b:number
    c:number
}
function add1(num: Number):number{
    return num.a+num.b+num.c;
}

let q = {
    a : 1,
    b : 2,
    c : 3
}
console.log("add=======", add1(q));

interface MathOperation {
    (a: number, b?: number): number;
  }
  
  const add: MathOperation = (x, y = 0) => x + y;
  console.log(add(5, 10)); // Output: 15

  class Employee{
    protected employeeName:string;

    constructor(name){
        this.employeeName = name;
    }

    greed(){
        // console.log(typeof(this.employeeName));
        console.log("Good Morning", this.employeeName);
    }
}

let emp1 = new Employee(1);

emp1.greed();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    
    delegateWork(){
        console.log("Manager delegating tasks", (this.employeeName));
    }
}

let manager1 = new Manager("Andrew");
console.log("============")
manager1.greed();
manager1.delegateWork();