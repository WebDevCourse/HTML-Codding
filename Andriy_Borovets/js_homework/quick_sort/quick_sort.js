
// function that generates random arrays of n int elements
function getrandomarr(len) {
    var randarr = [];
    for(var i=0; i<len; i++){
        randarr.push(Math.floor((Math.random() * 50) + 1))  //ints from 1 - 10
    }
    return randarr;
};

arr = getrandomarr(30);
document.getElementById("arr1").innerHTML = arr;



function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// function that sorts array using quick sort
function quickSort(items, left, right) {

    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var start_time = performance.now();
var sarr = quickSort(arr, 0, arr.length - 1);
var finish_time = performance.now();
var execution_time = finish_time - start_time;
document.getElementById("time_spent").innerHTML = execution_time;
//console.log(sarr);

document.getElementById("arr2").innerHTML = sarr;
