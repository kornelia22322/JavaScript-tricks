# JavaScript-tricks
JavaScript tips&amp;tricks

1. Hositing: hoisting.js
2. To understand Scope Chain context look at scopeChain*.js files.

Tips&tricks
1. Never set variable to undefined. Undefined is not the same as null.
2. Any time you invoke JS function a new execution context is created and puts on execution stack.
3. Let - available only available in block scope
4. JavaScript engine contains Event Queue

Important!
5. When execution stack is empty - JavaScript engine looks periodically on Event Queue

6. JavaScript - dynamic typing
7. Six primitive types in JS - undefined, null, boolean, number (floating point), string, symbol (used in ES6)

8. When you call a setTimeout function or some async operation — it is added to the Event Table.
This is a data structure which knows that a certain function should be triggered after a certain event.
Once that event occurs (timeout, click, mouse move) it sends a notice.
Bear in mind that the Event Table does not execute functions and does not add them to the call stack on it’s own.
It’s only keeping track of events and send them to the Event Queue.

----------------------------------------------

CLOSURES

----------------------------------------------

HOISTING

An Execution Context is created each time you run your .js file/app.
The first step in this creation phase is Hoisting.
The JS Engine reserves space or set's up memory for all the variables and functions defined in your code.
