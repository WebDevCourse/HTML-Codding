var myData = [11, 5, 3, 8, 7];
var n = myData.length;

for (var i = 1; i < n; i++) {
    var value = myData[i];
    for (var j = i - 1; j >= 0 && myData[j] > value; j--) {
        myData[j+1]=myData[j];
    }
    myData[j+1]=value;
}

alert (myData);