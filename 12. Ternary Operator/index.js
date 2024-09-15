// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let purchaseAmout = 125;
let discount = purchaseAmout >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmout - purchaseAmout * (discount/100)}`);