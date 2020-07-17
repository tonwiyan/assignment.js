function chair(count) {
    var chairArea = 1 * count;
    return chairArea;
}


function table(count) {
    var tableArea = 3 * count;
    return tableArea;
}
function bad(count) {
    var badArea = 5 * count;

    return badArea;
}
var sum = chair(1) + table(2) + bad(3);
console.log(sum + " cubicFeet");