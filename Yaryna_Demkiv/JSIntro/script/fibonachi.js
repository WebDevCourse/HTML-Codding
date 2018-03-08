let arr = [1,2,3,4,5];

function getSums (arr) {
    var result = [];
    if (!arr.length) return result;

    arr.reduce (function (sum, item) {
        result.push (sum);
        return (sum + item);
    });

    return result;
}

console.log(getSums (arr));