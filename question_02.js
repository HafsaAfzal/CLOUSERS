// Create a function called `createMultiplier` that takes a number as a parameter. The
// function should return another function that multiplies a given number by the
// number passed to `createMultiplier`. Use a closure to access the number parameter.
function createMultiplier(num){
    function mul(){
        let a =5*num;
        return a
    }
    return mul()
}
let c =createMultiplier(5)
console.log(c)