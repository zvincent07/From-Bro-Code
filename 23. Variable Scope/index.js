// variable scope = where a variable is recognized 
//                  and accesible (local vs global)

let x = 3;

function function1()
{
    let x = 1;
    console.log(x);
}

function function2()
{
    let x = 2;
    console.log(x);
}

function1();
function2();
