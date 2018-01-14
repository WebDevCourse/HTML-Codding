import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS} from './consts';
import Algo from './Algo';

class BadAlgo extends Algo{
    constructor(document, selector) {
        super(document, selector);
    }

    async perform(numbers){
        let exist = false;
        for (let i = 1; i <= NUMBEROFNUMBERS; ++i) {
            for (let j = 0; j < NUMBEROFNUMBERS - 1; ++j) {
                await sleepFor(K);
                if (i == numbers[j].number) {
                    numbers[j].undraw(this.context);
                    exist = true;
                }
            }
            if (!exist) {
                console.log(i);
            }
        }
    };

}


export default BadAlgo;