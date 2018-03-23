function InsertionSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let v = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = v;
  }
  return arr;
}
export default InsertionSort;