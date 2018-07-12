/* Callback example ?*/

var a = 5;
var b = 6;

function execute(callback) {
    var a = 3;
    var b = 4;
    
    callback();
}

execute(function() {
    console.log(a + b);
});
