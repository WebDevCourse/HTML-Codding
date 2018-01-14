//TODO: add good delay between deleting symbols

import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';
import BadAlgo from "./BadAlgo";


class Complexity {
    constructor(document, goodSelector, badSelector) {
        this.good = new GoodAlgo(document, goodSelector);
        this.bad = new BadAlgo(document, badSelector);
        this.numbers = new Array(NUMBEROFNUMBERS)
            .fill()
            .map((el, i) =>
                new MyNumber(getRandom(MARGINFROMSIDES, this.good.width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.good.height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS + 1)));
    }

    generatePoints() {
        this.numbers.map((el) => {
            el.draw(this.good.context);
            el.draw(this.bad.context);
        });
        return this;
    };

    renderNumber(number, modifier) {
        let nd = document.createElement("span");
        nd.textContent = number;
        nd.classList.add("result__missing-numbers");
        nd.classList.add(modifier);
        return nd;
    }

    action() {
        this.bad.perform(this.numbers).then(value => {
            let elem = document.querySelector(".result__bad");
            // console.log(value);
            value.map((el) => elem.appendChild(this.renderNumber(el, "result__missing-numbers_bad")));
        });


        this.good.perform(this.numbers).then(value => {
            let elem = document.querySelector(".result__good");
            // console.log(value);
            value.map((el) => elem.appendChild(this.renderNumber(el, "result__missing-numbers_good")));

        });
    }
}

new Complexity(document, ".content__algo_good", ".content__algo_bad").generatePoints().action();