import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS, MARGINFROMSIDES} from './consts';

class BadAlgo {
    constructor(document) {
        this.rect = document.querySelector(".content__algo_bad");
        this.context = this.rect.getContext('2d');
        this.height = this.rect.getBoundingClientRect().height;
        this.width = this.rect.getBoundingClientRect().width;
        this.rect.height = this.height;
        this.rect.width = this.width;
    }


    async badAlgorithm(numbers){
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