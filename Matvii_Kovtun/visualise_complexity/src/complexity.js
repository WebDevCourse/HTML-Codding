//TODO: rename entry point

import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';
import BadAlgo from "./BadAlgo";


class Complexity {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(document) {
        this.good = new GoodAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "good");
        this.bad = new BadAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "bad");
    }


    clearArea() {
        this.good.prepareAreas();
        this.bad.prepareAreas();
        return this;

    }

    generatePoints() {
        this.numbers = new Array(NUMBEROFNUMBERS)
            .fill()
            .map((el, i) =>
                new MyNumber(getRandom(MARGINFROMSIDES, this.good.width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.good.height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS + 1)));
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

    async action() {
        await Promise
            .all([
                this.good.perform(this.numbers).then(value => {
                    let elem = document.querySelector(".result__good");
                    value.map((el) => elem.appendChild(this.renderNumber(el, "result__missing-numbers_good")))
                }),
                this.bad.perform(this.numbers).then(value => {
                    let elem = document.querySelector(".result__bad");
                    value.map((el) => elem.appendChild(this.renderNumber(el, "result__missing-numbers_bad")));
                })
            ])


    }
}


const gameOrder = () => {
    let resetButton = document.querySelector(".start-button");
    let game = new Complexity(document);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("start-button_disabled");
        game.clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("start-button_disabled"));
    }, false);

};

gameOrder();