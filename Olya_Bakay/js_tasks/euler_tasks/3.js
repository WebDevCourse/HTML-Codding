// Largest prime factor

function maxPrime(number) {
    let lst = [];
    let divisor = 2;
    while (number > 1){
        if (number % divisor === 0 ){
            lst.push(divisor);
            number /= divisor;
        }

        divisor++;
        if (divisor * divisor > number){
            if (number > 1) lst.push(number);
            break
        }

    }
    return lst[lst.length-1];
}
console.log(maxPrime(600851475143));


