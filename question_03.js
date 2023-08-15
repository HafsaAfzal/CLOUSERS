// Create a function called `secretMessage` that takes a string as a parameter. The
// function should return another function that logs the secret message along with the
// provided string. Use a closure to access the string parameter.
function secretMessage(string) {
    function logs() {
        console.log(`successfuly logs the ${string}`)
    }
    return logs
}
let s = secretMessage(`secret message from another function`)
s()