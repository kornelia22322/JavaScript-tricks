/* inner function still has access to outer language variable */

function factory(language) {
    return function (firstname, lastname) {
        if(language === 'en') {
            console.log('Hello' + firstname + lastname);
        } else if(language === "es") {
            console.log('Hola' + firstname + lastname);
        }
    }
}
