//events listening section:
var elems = document.getElementsByClassName("var");
for (var i = 0, len = elems.length; i < len; i++) {
    elems[i]
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementsByClassName("calc")[0].click();
            }
        });
}
function display() {
    var a = parseFloat(document.getElementsByClassName("a")[0].value);
    var d = parseFloat(document.getElementsByClassName("d")[0].value);
    var n = parseInt(document.getElementsByClassName("n")[0].value);
    var arr = [];
    if (isNaN(a) || isNaN(d) || isNaN(n)){
        alert("you have to fill all the gaps!");
        return ;
    }
    for(var i=1;i<=n;i++){
        x = a + (i-1)*d;
        arr.push(x);
    }
    arrey = "a = [" +  arr + "]";
    document.getElementsByClassName("array")[0].innerHTML = arrey;
    s = sum_of_ap(a,d,n);
    sum = "sum = " + s;
    document.getElementsByClassName("sum")[0].innerHTML= sum;
}
function sum_of_ap(a,d,n) {
    an = a + (d*(n-1));
    sum = (((a + an)/2) * n);
    return sum;
}