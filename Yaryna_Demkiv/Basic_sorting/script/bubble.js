function bubbleSort(myData1) {


for (i = 0; i < n-1; i++) {
    for (j = 0; j < n-i; j++) {
        k = k + 1;
        console.log(myData1[j]);
        if (myData1[j]>myData1[j+1]) {
            k1 = k1 + 1;
            var temp = myData1[j];
            myData1[j] = myData1[j+1];
            myData1[j+1] = temp;
        }
    }
    console.log("--");
}
return myData1;
}

var myData = [11, 5, 3, 8, 7];
var n = myData.length;
var k = 0;
var k1 = 0;

var myData2 = bubbleSort(myData);

alert (myData);
alert (myData2);
alert(k);
alert(k1);
