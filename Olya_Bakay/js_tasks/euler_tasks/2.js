// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

function sumOfFibonacci() {
    const maxLen = 4 * 1e6;
    let lst = [],
        sum = 0;

    lst[0] = 0;
    lst[1] = 1;
    
    for (let i = 2; i < 1000; i++){
        lst[i] = lst[i-2] + lst[i - 1];
        if (lst[i] < maxLen && lst[i] % 2 === 0){
            sum += lst[i];
        }
    }
    return sum;
}

console.log(sumOfFibonacci());