// Create a function called `counter` that returns another function. The returned
// function should increment a counter variable and log its value. Use a closure to keep
// track of the counter variable.
function counter(){
    let counter=0
    function incrementFunc(){
        counter++
        console.log(`counter value is ${counter}`)
    }
    return incrementFunc()
}
const result=counter()


