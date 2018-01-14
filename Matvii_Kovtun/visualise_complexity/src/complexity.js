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
                new MyNumber(getRandom(MARGINFROMSIDES, this.good.width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.good.height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS)));
    }

    generatePoints() {
        this.numbers.map((el) => {
            el.draw(this.good.context);
            el.draw(this.bad.context);
        });
        return this;
    };

    action() {
        this.good.perform(this.numbers).then(value => {
            console.log(value);
        });

        this.bad.perform(this.numbers).then(value => {
            console.log(value);
        });

    }
}

new Complexity(document, ".content__algo_good", ".content__algo_bad").generatePoints().action();