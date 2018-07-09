/* Even though execution context of saySomething function is gone
the variable sayHi still keeps reference to the variables and memory space of its
outer environment. Any function created inside of it it is still has acess to saySomething
variables and memory */

function saySomething(something) {
    return function(name) {
        console.log(something + " " + name);
    }
}

function sayLambdaSomething(something) {
    return (name) => {
        console.log(something + " " + name);
    }
}

/* i is not defined error
Declaration first, then assignments
JS knows about i value but can't determine it's value! */
function incrementClousure() {
    let i = 0;
    return function() {
        i++;
        return function() {
            i++;
            let i = 0;
            console.log(i);
        }
    }
}

let sayHi = saySomething("I said something because");
sayHi("...JavaScript is amazing");

let sayHi_ = sayLambdaSomething("I sad something because..");
sayHi_("...JS is amazing..");

let inc = incrementClousure();
inc()();
