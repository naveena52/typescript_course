//named function 
function sub(x:number,y:number):number
{
return x-y;
}
console.log(sub(4,6));

//anonymous function it doesn;t had any name to the function just used with function keyword
let multiply = function(x: number, y: number): number {
    return x * y;
};

console.log(multiply(3, 4)); // Output: 12


//Arrow function
let divide = (x: number, y: number): number => {
    return x / y;
};

console.log(divide(12, 3)); 
let subtract =(x:number,y:number):number=>
{
    return x-y;
}
console.log(subtract(5,8));

// Function Expression
// A function expression in TypeScript is a function that is assigned to a variable or a constant.
// It's created using the function keyword without a function name, and then assigned to a variable.

let subtract1: (x: number, y: number) => number = function(x: number, y: number): number {
    return x - y;
};

console.log(subtract1(7, 2));
