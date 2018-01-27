class Display{
    constructor(){
        this.section = document.createElement("section");
        this.a = document.createElement("input");
        this.d = document.createElement("input");
        this.n = document.createElement("input");
        this.button = document.createElement("button");
        this.text = document.createElement("text");
        this.arr = document.createElement("p");
        this.sum = document.createElement("p");
        this.genPage();
    }
    genPage(){
        this.a.className += "a";
        this.a.classList.add("var");
        this.d.className += "d";
        this.d.classList.add("var");
        this.n.className += "n";
        this.n.classList.add("var");
        this.button.className += "calc";
        this.button.innerHTML = "print";
        this.text.classList.add("warning");
        this.text.innerHTML = "  you have to fill all the gaps!";
        this.text.style.display = "None";
        this.arr.className += "arr";
        this.sum.className += "sum";
        this.button.addEventListener("click",this.genArrSum);
        this.section.innerHTML += "a:";
        this.section.appendChild(this.a);
        this.section.innerHTML += "d:";
        this.section.appendChild(this.d);
        this.section.innerHTML += "n:";
        this.section.appendChild(this.n);
        this.section.appendChild(this.button);
        this.section.appendChild(this.text);
        this.section.appendChild(this.arr);
        this.section.appendChild(this.sum);
    }
    genArrSum() {
        let text = this.parentNode.getElementsByClassName("warning")[0];
        text.style.display = "None";
        let a = parseFloat(this.parentNode.getElementsByClassName("a")[0].value);
        let d = parseFloat(this.parentNode.getElementsByClassName("d")[0].value);
        let n = parseFloat(this.parentNode.getElementsByClassName("n")[0].value);
        let arr = this.parentNode.getElementsByClassName("arr")[0];
        let sum = this.parentNode.getElementsByClassName("sum")[0];
        if (isNaN(a) || isNaN(d) || isNaN(n)){
             text.style.display = "block";
             arr.innerHTML = "";
             sum.innerHTML = "";
            return ;
        }
        let arr_str = "a = [";
        for(let i=1;i<=n;i++){
            let x = a + (i-1)*d;
            arr_str += x.toString();
            if(i === n){
                continue;
            }
            arr_str += ", ";
        }
        arr_str+="]";
        //arr.innerHTML = "a = [" +  arr_str + "]";
        arr.innerHTML = arr_str;
        let an = a + (d*(n-1));
        sum.innerHTML = "sum = " + (((a + an)/2) * n);
    }
    display(){
        document.body.appendChild(this.section);
        //document.getElementsByClassName("container")[0].appendChild(this.section);
        let elems = document.getElementsByClassName("var");
        for (let i = 0, len = elems.length; i < len; i++) {
            elems[i]
                .addEventListener("keyup", function(event) {
                    event.preventDefault();
                    if (event.keyCode === 13) {
                        if(event.shiftKey){
                            let list = document.getElementsByClassName("calc");
                            let ln = list.length;
                            for(let y = 0;y < ln; y++){
                                document.getElementsByClassName("calc")[y].click();
                            }
                        }else {
                            let evt = new MouseEvent("click", {
                                view: window,
                                bubbles: true,
                                cancelable: true,
                                clientX: 20,
                            });
                            let button = event.currentTarget.parentElement.getElementsByClassName("calc")[0];
                            button.dispatchEvent(evt);
                        }
                    }
                });
        }
    }
}
let x1 = new Display();
let x2 = new Display();
let x3 = new Display();
let x4 = new Display();
x1.display();
x2.display();
x3.display();
x4.display();