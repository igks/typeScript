export {};
let message = "Hello Word";
console.log(message);

// Declaration
let x = 10;
const y = 20;

let sum;
const title = "Sample";

// Type
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Sample";

// multiple line
let sentence: string = `My name is ${name}
 I am a beginner in type script`;

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["name", 10];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
// result is 2

enum Color2 {
  Red = 5,
  Green,
  Blue,
}
let d: Color2 = Color2.Blue;
// result is 7

// any type not generate an error when doing call a method from the variable
let randomValue: any = 10;
randomValue = true;
randomValue = "Name";

// unknown type will raise an error from calling a method from the variable
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = "Name";

let multiType: number | boolean;
multiType = 20;
multiType = true;

// Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(10, 5);

// optional parameter
function add2(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add2(5);

// default parameter
function add3(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

// Interface
interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

// Class
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let employee1 = new Employee("Name");
console.log(employee1.employeeName);
employee1.greet();

// Inheritance
class Manager extends Employee {
  constructor(manageName: string) {
    super(manageName);
  }

  delegateWork() {
    console.log("Delegating task");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Access modifier
// public -> accessibility from anywhere
// private -> accessibility only within the class
// protected -> accessibility within the class and class extending the base class
