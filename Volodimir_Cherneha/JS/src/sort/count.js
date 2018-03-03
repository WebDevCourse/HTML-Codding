function CountSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length;

  let count = [];
  let B = [];
  for (let i = 0; i < n; i++) count[i] = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) count[j]++;
      else count[i]++;
    }
  }

  for (let i = 0; i < n; i++) {
    B[count[i]] = arr[i];
  }
  return B;
}

export default CountSort;