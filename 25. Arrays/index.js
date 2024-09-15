// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits[0] = "coconut";
// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(index);

fruits.sort().reverse(); // sort alphabetically

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

for(let i = fruits.length - 1; i >= 0 ; i--)
{
    console.log(fruits[i]);
}

for(let fruit of fruits)
{
    console.log(fruit);
}