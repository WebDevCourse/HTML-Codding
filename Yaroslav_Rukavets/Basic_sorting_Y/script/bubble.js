var myData = [11, 5, 3, 8, 7];
var n = myData.length;
var k = 0;
var k1 = 0;

for (i = 0; i < n-1; i++) {
    console.log(myData[i]);
    for (j = 0; j < n-i; j++) {
        k = k + 1;
        if (myData[j]>myData[j+1]) {
            k1 = k1 + 1;
            var temp = myData[j];
            myData[j] = myData[j+1];
            myData[j+1] = temp;
        }
    }
}

alert (myData);
alert(k);
alert(k1);