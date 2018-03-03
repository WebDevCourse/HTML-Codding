import {split} from "../utils";

function SelectionSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = arr[i];
    for (let j = i + 1; j < n; j++) {
      if (min > arr[j]) {
        min = arr[j];
        split(arr, i, j);
      }
    }
  }
  return arr;
}

export default SelectionSort;