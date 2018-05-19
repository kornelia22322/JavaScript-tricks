/* In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Hoisting - setup memory space for functions and variables while Execution
Context is created */

b();
console.log(a); //what it returns and why?

var a = "Hello World from vaiable";

function b() {
    console.log("Hello World inside the function.");
}
