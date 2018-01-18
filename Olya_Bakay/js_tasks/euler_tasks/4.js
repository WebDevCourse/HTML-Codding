// Find the largest palindrome made from the product of two 3-digit numbers

function largestPalindrome(number1, number2) {
    let res = (number1 * number2).toString();
    let len = res.length;
    for (let i=0; i<len; i++){
        let counter = i;
        console.log(res.slice(counter, counter+1));
        console.log(res.slice(len-3, len-2));


/*
        int divisor = 1;
        while (n / divisor >= 10)
            divisor *= 10;

        while (n != 0)
        {
            int leading = n / divisor;
            int trailing = n % 10;

            // If first and last digit
            // not same return false
            if (leading != trailing)
                return false;

            // Removing the leading and trailing
            // digit from number
            n = (n % divisor) / 10;

            // Reducing divisor by a factor
            // of 2 as 2 digits are dropped
            divisor = divisor / 100;
        }
        return true;
 */
    }
}

console.log(largestPalindrome(91, 99));
