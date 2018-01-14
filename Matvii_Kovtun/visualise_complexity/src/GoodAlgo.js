import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS, MARGINFROMSIDES} from './consts';

class GoodAlgo {
    constructor(document) {
        this.rect = document.querySelector(".content__algo_good");
        this.context = this.rect.getContext('2d');
        this.height = this.rect.getBoundingClientRect().height;
        this.width = this.rect.getBoundingClientRect().width;
        this.rect.height = this.height;
        this.rect.width = this.width;
    }


    async goodAlgorithm(numbers){
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