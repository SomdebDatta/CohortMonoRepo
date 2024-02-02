"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction["Down"] = "20";
    Direction[Direction["Left"] = 30] = "Left";
    Direction[Direction["Right"] = 31] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something.
}
// doSomething(Direction.Up);
console.log(Direction);
// doSomething('Up')
