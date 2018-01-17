// // 10 001st prime number
//
// function primeNum(number) {
//
//     var lst = [];
//     var maxlen = 1e6;
//     for (let i = 1; i < 100000; i++) {
//         var isPrime = true;
//         for (let div = 2; div <= i; div++) {
//             if (i % div === 0) {
//                 isPrime = false;
//             }
//
//         }
//         if (isPrime === true) lst.push(i)
//     }
//     lst.splice(0,1,2, 3, 5, 7);
//
//     console.log(lst)
//     return lst[number-1];
// }
//
//
// console.log(primeNum(10001));

//problem7
function isPrime(num){
    if(num > 1){
        for(var i = 2; i<num;i++){
            if(num%i ===0){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

var nth = 0;
var i = 0;
while(nth !== 10001){
    ///console.log('i: ',i);
    if (isPrime(i)){
        console.log('nth: ',nth,'  - ',i);
        nth += 1;
    }
    i++;
}
console.log(i -1 );
