function buildFunc() {
    let arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;
}
let func = buildFunc();

func[0]();
func[1]();
func[2]();
