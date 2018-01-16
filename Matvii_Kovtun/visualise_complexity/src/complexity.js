//TODO: add good delay between deleting symbols

import Number from "./Number";
import {getRandom} from "./utils";


const goodAlgo = document.querySelector(".content__algo_good");
const goodCtx = goodAlgo.getContext('2d');
const {height, width} = goodAlgo.getBoundingClientRect();
goodAlgo.height = height;
goodAlgo.width = width;

const badAlgo = document.querySelector(".content__algo_bad");
const badCtx = badAlgo.getContext('2d');
badAlgo.height = height;
badAlgo.width = width;


const marginFromSides = 10;
const numberOfNumbers = 100;


const numbers = new Array(numberOfNumbers - 1)
    .fill()
    .map((el, i) =>
        new Number(getRandom(marginFromSides, width - marginFromSides), getRandom(marginFromSides, height - marginFromSides), i + 1));


const generatePoints = () => {
    numbers.map((el) => {
        el.draw(goodCtx);
        el.draw(badCtx);
    });

};


const badAlgorithm = () => {
    let exist = false;
    for (let i = 1; i <= numberOfNumbers; ++i) {
        for (let j = 0; j < numberOfNumbers - 1; ++j) {
            if (i == numbers[j].number) {
                // numbers[j].undraw(badCtx);
                exist = true;
            }
        }
        if (!exist) {
            console.log(i);
        }
    }
};

const goodAlgorithm = () => {
    const countNumbers = new Array(numberOfNumbers).fill(0);
    numbers.map((el) => {
        countNumbers[el.number - 1]++;
    });
    countNumbers.map((el, i) => {
        if (el == 0) console.log(i + 1);
        // else numbers[i].undraw(goodCtx);
    });
};


generatePoints();
badAlgorithm();
goodAlgorithm();