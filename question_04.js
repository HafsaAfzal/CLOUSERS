// Create a function called `calculate` that takes two numbers as parameters. The
// function should return an object with two methods: `add` and `multiply`. The `add`
// method should add the two numbers, and the `multiply` method should multiply
// them. Use a closure to access the number parameters.
function calculate(a,b){
    const obj={
        add:()=>{
            return c=a+b;
        },
        mul:()=>{
            return d=a*b;
        }
    }
    return obj;
}
let r = calculate(5,4);
console.log(r);
