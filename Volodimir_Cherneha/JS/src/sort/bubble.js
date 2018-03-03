import {split} from "../utils";

function BubbleSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j + 1] < arr[j]) {
        split(arr, j, j + 1);
      }
    }
  }

  return arr;
}

export default BubbleSort;