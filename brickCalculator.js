var num;
function brickCalculate(count) {

    if (count >= 20) {
        var count = 10;   //greater then 20 = 10

    }
    else if (count >= 11) {
        var count = 12;    //11 to 20 =12

    }
    else {
        var count = 15;   //1 to 10 = 15
    }
    return count;
}
var brick = brickCalculate(3);
console.log(brick * 1000);//per feet 1000 brick