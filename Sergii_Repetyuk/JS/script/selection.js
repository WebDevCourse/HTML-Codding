var myData = [88, 2, 90, 4, 5, 15, 18, 19, 55, 26, 999, 27, 12, 36, 38 ,44, 46, 47, 48, 50, 3];
var n = myData.length;
var k = 0;
var k1 = 0;

for (i = 0; i < n-1; i++) {
    console.log(myData[i]);
    min = i;
    for (j = 0; j < n-i; j++) {
        k = k + 1;
        if (myData[j]< myData[ j++]) {
            k1 = k1 + 1;
            if (i != min) {
                swap(myData, i, min)
            }
            console.log("--");
            var temp = myData[i];
            myData[i] = myData[jmin];
            myData[jmin] = temp;

        }

    }
}

alert (myData);
alert(k);
alert(k1);


/*function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
*/