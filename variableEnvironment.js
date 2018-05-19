function b() {
    var anyVar;
    console.log(anyVar);
}

function a() {
    var anyVar = 2;
    console.log(anyVar);
    b();
}

var anyVar = 1;
console.log(anyVar);
a();
console.log(anyVar);
