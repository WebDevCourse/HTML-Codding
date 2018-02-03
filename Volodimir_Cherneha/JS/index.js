function BubbleSort( inputArr ) {
  let arr = inputArr.slice();
  let n = arr.length - 1;

  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j + 1] < arr[j]) {
        split(arr, j, j+1);
      }
    }
  }

  return arr;
}

function SelectionSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length;

  for (let i = 0; i < n ; i++) {
    let min = arr [i];
    for (let j = i+1; j < n; j++) {
      if (min > arr[j]) {
        min = arr[j];
        split(arr, i, j);
      }
    }
  }
  return (arr);
}

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
  return (arr);
}


function CountSort(inputArr) {
  let arr = inputArr.slice();
  let n = arr.length;

  let count = [];
  let B = [];
  for (let i = 0; i < n; i++)
    count[i] = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j])
        count[j]++;
      else count[i]++;
    }
  }

  for (let i = 0; i < n; i++) {
    B[count[i]] = arr[i];
  }
  return B;
}


// let arr = [29, 21, 2, 1, 9, 0, 3];
let arr = getRandomArr(10);

console.log("Вхідний масив:", arr)

console.log("Бульбашкою:", BubbleSort(arr))
console.log("Вибіркою:", SelectionSort(arr))
console.log("Вставкою:", InsertionSort(arr))
console.log("Підрахунком:", CountSort(arr))

