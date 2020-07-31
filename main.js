"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello Word";
console.log(message);
// Declaration
var x = 10;
var y = 20;
var sum;
var title = "Sample";
// Type
var isBeginner = true;
var total = 0;
var name = "Sample";
// multiple line
var sentence = "My name is " + name + "\n I am a beginner in type script";
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["name", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// result is 2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
var d = Color2.Blue;
// result is 7
// any type not generate an error when doing call a method from the variable
var randomValue = 10;
randomValue = true;
randomValue = "Name";
// unknown type will raise an error from calling a method from the variable
var randomValue2 = 10;
randomValue2 = true;
randomValue2 = "Name";
var multiType;
multiType = 20;
multiType = true;
// Function
function add(num1, num2) {
    return num1 + num2;
}
add(10, 5);
// optional parameter
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5);
// default parameter
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
// Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee("Name");
console.log(employee1.employeeName);
employee1.greet();
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manageName) {
        return _super.call(this, manageName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Access modifier
// public -> accessibility from anywhere
// private -> accessibility only within the class
// protected -> accessibility within the class and class extending the base class
