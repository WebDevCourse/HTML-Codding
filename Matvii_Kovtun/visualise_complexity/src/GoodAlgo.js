import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS} from './consts';
import Algo from "./Algo";

class GoodAlgo extends Algo {
    constructor(document, selector) {
        super(document, selector);
    }

    async perform(numbers){
        const countNumbers = new Array(NUMBEROFNUMBERS).fill(0);
        for (let i = 0; i < numbers.length; ++i) {
            await sleepFor(K);
            countNumbers[numbers[i].number - 1]++;
        }
        // console.log(countNumbers);
        for (let i = 0; i < countNumbers.length; ++i) {
            await sleepFor(K);
            if (countNumbers[i] === 0) {
                console.log(i + 1)
            }
            else {
                numbers[i].undraw(this.context);
            }
        }
    };

}


export default GoodAlgo;