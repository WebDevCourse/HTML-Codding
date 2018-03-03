import {getRandomArr} from "./utils";
import BubbleSort from "./sort/bubble";
import SelectionSort from "./sort/selection";
import InsertionSort from "./sort/insertion";
import CountSort from "./sort/count";

// let arr = [29, 21, 2, 1, 9, 0, 3];
let arr = getRandomArr(10);

console.log("Вхідний масив:", arr);

console.log("Бульбашкою:", BubbleSort(arr));
console.log("Вибіркою:", SelectionSort(arr));
console.log("Вставкою:", InsertionSort(arr));
console.log("Підрахунком:", CountSort(arr));
