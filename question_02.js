// Create a function called `createMultiplier` that takes a number as a parameter. The
// function should return another function that multiplies a given number by the
// number passed to `createMultiplier`. Use a closure to access the number parameter.
function createMultiplier(num){         // 2nd function execute 
    function mul(){
        let a =5*num;
        return a
    }
    return mul;                 //3rd return mul but mul function is not executed
}      
let c =createMultiplier(5);         //1st call the create multiplier function with argument value 5 and store the thing that this function return in varible c.
// console.log(c)
console.log(c())            //// now c contain mul when c() write it calls the mul function and return the value of a that is console
