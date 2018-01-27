function ArifmeticProgression() {
    let a1 = document.getElementsByClassName('inputs__input-a1');
    a1 = Array.prototype.slice.call(a1);
    let d = document.getElementsByClassName('inputs__input-d');
    d = Array.prototype.slice.call(d);
    let n = document.getElementsByClassName('inputs__input-n');
    n = Array.prototype.slice.call(n);

    console.log(a1);
    const res = a1.map((el, i) => {
        return A_P(parseFloat(el.value), parseFloat(d[i].value), parseFloat(n[i].value))
    });

    // console.log(res);
    res.map((el, i) => {
        document.getElementsByClassName("sum")[i].innerHTML = el;
    })
}

function A_P(a1, d, n) {
    console.log(a1, d, n);
    var an = a1 + (n - 1) * d;
    sum = ((a1 + an) / 2) * n;
    return sum;
}

var inputs = document.getElementsByClassName("inputs__input-n");
inputs = Array.prototype.slice.call(inputs);
inputs.map((el, i) => {
    el.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementsByClassName("inputs__calculate-button")[i].click();
        }
    })
});
