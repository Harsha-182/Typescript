"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var string = "Hello, Buddy!";
console.log(string);
var a = 10;
var s = "Hello";
s = "kfdvbjk";
var b = true;
var c = "fdjvhbdjfb".concat(b);
console.log(c);
var arr = [1, 's', 2, 3, 4, 5];
console.log("arr", arr);
var tupple = [2, "baii"];
console.log("tupple", tupple);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var p = Color.Red;
console.log("p", p);
var type = 10;
// (type as string).toUpperCase();
console.log("type", type);
// console.log(type.name);
function check(obj) {
    return obj && typeof obj === 'object' && obj.name !== undefined;
}
if (check(type)) {
    console.log("type.name", type.name);
}
var j = 10;
var func = function (a, b) {
    console.log(a, "Iam inside the function", b);
};
func("hii", 1);
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 3));
console.log(combine('hii', 'jack'));
function add1(num) {
    return num.a + num.b + num.c;
}
var q = {
    a: 1,
    b: 2,
    c: 3
};
console.log("add=======", add1(q));
var add = function (x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
};
console.log(add(5, 10)); // Output: 15
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greed = function () {
        // console.log(typeof(this.employeeName));
        console.log("Good Morning", this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee(1);
emp1.greed();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks", (this.employeeName));
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Andrew");
console.log("============");
manager1.greed();
manager1.delegateWork();
