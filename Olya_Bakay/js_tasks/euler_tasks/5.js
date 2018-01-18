// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestDiv(div) {
    for (let number = div; ;number++){
        let isDivisible = false;

        for (let i=2; i<=div; i++){
            if (number % i !== 0){
                isDivisible = true;
            }
        }
        if (isDivisible === false) {
            return number;
        }
    }
}

console.log(smallestDiv(20));