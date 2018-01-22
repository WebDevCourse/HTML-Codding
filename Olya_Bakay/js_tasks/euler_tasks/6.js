
function Diff(number) {
    var sumOfSq = 0,
        SquareSum = 0;
    for (let i = 1; i < number+1; i++){
        sumOfSq += i**2;
        SquareSum += i;
    }
    var diff = SquareSum**2 - sumOfSq;
    return diff;
}


console.log(Diff(100));
