// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples(first, sec, number) {
    let sum = 0;
    for(let i = 0; i < number; i++){
        if (i % first === 0  || i % sec === 0){
            sum += i;
        }
    }
    return sum;
}

// console.log(sumOfMultiples(3,5,1000));