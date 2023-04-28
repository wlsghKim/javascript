var x = 10;
var x = 20; //재정의 
console.log(x);

var y = 10;
function f() {
    var y = 20;
}
console.log(y);

var y = 10;
for(var y=1; y<3; y++) {
    var y =20;
}
console.log(y);