// number
let age: number = 25;

// string
let nam: string = "John";

// boolean
let isStudent: boolean = true;
let isTeacher:boolean=false;

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];

// tuple
let person: [string, number] = ["John", 30];
let woman :[string,number] =["SHE",23];

// enum
enum Gender {
    Male,
    Female,
    Other
}
let gender: Gender = Gender.Male;

// any
let dynamicValue: any = 10;
dynamicValue = "Hello";

// void (function that doesn't return a value)
function sayHello(): void {
    console.log("Hello, TypeScript!");
}

// null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Printing values
console.log("Age:", age);
console.log("Name:", nam);
console.log("Is Student:", isStudent);
console.log("Is Teacher",isTeacher);
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Person:", person);
console.log("Gender:", gender);
console.log("Dynamic Value:", dynamicValue);
sayHello();
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
