// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
//
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

const sumOfEvenFibonacciNumbers = (n) => {
    let sumOfEven = 0;
    let twoLastFibonacciNumbers = [1, 1];

    let itter = 0;
    while (twoLastFibonacciNumbers[++itter % 2] <= n) {
        if (twoLastFibonacciNumbers[itter % 2] % 2 == 0) {
            sumOfEven += twoLastFibonacciNumbers[itter % 2];
        }
        twoLastFibonacciNumbers[itter % 2] = twoLastFibonacciNumbers[0] + twoLastFibonacciNumbers[1];
    }
    return sumOfEven;
}

// Test case
// Answer: 10
console.log(sumOfEvenFibonacciNumbers(10));

// Task
// Answer: 4613732
console.log(sumOfEvenFibonacciNumbers(4000000));