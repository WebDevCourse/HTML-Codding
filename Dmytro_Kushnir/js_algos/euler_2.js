// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


function nextFibo(prePrev, prev) {
    return prePrev + prev;
}

function someDivisorFiboSum(divisor, Limit){
    var aFiboElement = 1, bFiboElement = 1;
    var buf;
    var accum = 0;
    while (bFiboElement < Limit){
        if (bFiboElement % divisor === 0){
            accum += bFiboElement;
        }
        buf = aFiboElement;
        aFiboElement = bFiboElement;
        bFiboElement = nextFibo(buf, bFiboElement);
    }
    return accum;
}

console.log(someDivisorFiboSum(2, 4000000));