// Create a function called `counter` that returns another function. The returned
// function should increment a counter variable and log its value. Use a closure to keep
// track of the counter variable.
function counter(){
    let counter=0
    function incrementFunc(){
        // let counter=0
        counter++
        console.log(`counter value is ${counter}`)
    }
    return incrementFunc;  //this reeturn the inrement function
}

const  result =counter() ;  // variable result contain the return value of counter function that is increment function
// console.log(result)     //output is undefined because result contain increment function return but this fuction is not call nor execute
result()    //


