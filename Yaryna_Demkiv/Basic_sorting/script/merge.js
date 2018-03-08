var A = [1, 4, 8, 11, 16];
var B = [2, 5, 9];
var C = [1,4,8,11,16,2,5,9];

function mySort (X) {
    var unsorted = Array.from(X);
    console.log(unsorted);
    //console.log(unsorted.length);
    if (unsorted.length  <2) {
        console.log("NoMerge")
        return unsorted;
    }
    else {
        //return [0]
        console.log("StartMerge_FirstArray");
        var rez1 = mySort(unsorted.slice(0, Math.round((unsorted.length)/2)));
        console.log("rez1");
        console.log(rez1);
        console.log("StartMerge_SecondArray");
        var rez2 = mySort(unsorted.slice(Math.round((unsorted.length)/2), unsorted.length));
        console.log("Merge");
        console.log(rez1);
        console.log(rez2);
        //alert("1");
        var rez3 = merge(rez1, rez2);
        return rez3

    }


}

function merge (argument1, argument2) {
    var arr1 = Array.from(argument1);
    var arr2 = Array.from(argument2);
    var arr = [];
    var jarr1 = 0;
    var jarr2 = 0;
    var jarr = 0;

    while (jarr1 < arr1.length && jarr2 < arr2.length) {
        if (arr1[jarr1] < arr2[jarr2]) {
            arr[jarr] = arr1[jarr1];
            jarr1++;
        }
        else {
            arr[jarr] = arr2[jarr2];
            jarr2++;
        }
        jarr++;
    }

    if (jarr1 == arr1.length && jarr2 != arr2.length) {
        for (var i = jarr2; i < arr2.length; i++) {
            arr[jarr] = arr2[i];
            jarr++;
        }
    }

    if (jarr2 == arr2.length && jarr1 != arr1.length) {
        for (var i = jarr1; i < arr1.length; i++) {
            arr[jarr] = arr1[i];
            jarr++;
        }
    }
    return arr;
}

var myData = merge (A, B);
//var myData = merge (AA, BB);
var myData = mySort(C);
alert(myData);
