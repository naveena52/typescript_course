// number
var age = 25;
// string
var nam = "John";
// boolean
var isStudent = true;
var isTeacher = false;
// array
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
// tuple
var person = ["John", 30];
var woman = ["SHE", 23];
// enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var gender = Gender.Male;
// any
var dynamicValue = 10;
dynamicValue = "Hello";
// void (function that doesn't return a value)
function sayHello() {
    console.log("Hello, TypeScript!");
}
// null and undefined
var nullValue = null;
var undefinedValue = undefined;
// Printing values
console.log("Age:", age);
console.log("Name:", nam);
console.log("Is Student:", isStudent);
console.log("Is Teacher", isTeacher);
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Person:", person);
console.log("Gender:", gender);
console.log("Dynamic Value:", dynamicValue);
sayHello();
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
