/* Every execution context has reference to outer environment
If it couldn't find it in execution context it search in outer environment */

function a() {
    function b() {
        console.log(anyVar);
    }
    var anyVar = 2;
    b();
}

var anyVar = 1;
a();
