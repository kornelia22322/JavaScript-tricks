/* Only ehen execution stack is empty -
JavaScript engine looks periodically on Event Queue */


function wait() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function...');
}

function clickHandle() {
    console.log('click event!');
}

wait();
console.log('finished execution');

document.addEventListener('click', clickHandle);
