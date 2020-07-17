function feetToMile(feet) {
    var mile = feet * 0.00018939;  //mi= ft*0.00018939
    return mile;
}
var Miles = feetToMile(100);
console.log("convert form feet: " + Miles + " miles"); 
