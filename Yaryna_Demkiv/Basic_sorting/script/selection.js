var myData = [11, 5, 3, 8, 7];
var n = myData.length;

for (var i = 0; i < n-1; i++) {
    var min = myData[i];
    var jmin = i;
    for (var j = i+1; j < n; j++) {
       console.log(myData[j]);
        if (myData[j]<min) {
            min = myData[j];
            jmin = j;
        }
    }
    console.log("--");
    var temp = myData[i];
    myData[i] = myData[jmin];
    myData[jmin] = temp;
}

alert (myData);

