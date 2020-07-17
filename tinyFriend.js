function tinyFriend(count) {
    var minimum = undefined;
    {
        for (var i = 0; i < count.length; i++) {
            if (minimum == undefined || count[i].length < minimum.length) {
                minimum = count[i];

            }
        }

    }
    return minimum;
}
var name = tinyFriend(["sumi", "ankur", "zo", "balam"]);
console.log(name);

