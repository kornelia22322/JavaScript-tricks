/* what will be an output ? */

var person = {
    a : 2,
    b : 1,
    someFun : function() {
        console.log(this.a + this.b);
    }
}

var a = 3;
var b = 4;

var otherFun = function() {
    console.log(this.a + this.b); //NaN output - undefined + undefined
}

var otherFunction = function() {
    console.log(a + b); //output : 7
}

var someOtherFun = function() {
    console.log(this.a + this.b); //output : 3
}.bind(person); //bind creates copy of function with changes this value

otherFun();
otherFunction();
someOtherFun();

otherFun.call(person); //output : 3
