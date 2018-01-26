class Display{
    constructor(){
        this.section = document.createElement("section");
        this.a = document.createElement("input");
        this.a.className += "a";
        this.a.classList.add("var");
        this.d = document.createElement("input");
        this.d.className += "d";
        this.d.classList.add("var");
        this.n = document.createElement("input");
        this.n.className += "n";
        this.n.classList.add("var");
        this.button = document.createElement("button");
        this.button.className += "calc";
        this.button.innerHTML = "print";
        this.arr = document.createElement("p");
        this.arr.className += "arr";
        this.sum = document.createElement("p");
        this.sum.className += "sum";
        this.button.addEventListener("click",this.genText);
        this.section.innerHTML += "a:";
        this.section.appendChild(this.a);
        this.section.innerHTML += "d:";
        this.section.appendChild(this.d);
        this.section.innerHTML += "n:";
        this.section.appendChild(this.n);
        this.section.appendChild(this.button);
        this.section.appendChild(this.arr);
        this.section.appendChild(this.sum);
        //this.display();
    }
    genText() {
        let a = parseFloat(this.parentNode.getElementsByClassName("a")[0].value);
        let d = parseFloat(this.parentNode.getElementsByClassName("d")[0].value);
        let n = parseFloat(this.parentNode.getElementsByClassName("n")[0].value);
        if (isNaN(a) || isNaN(d) || isNaN(n)){
            alert("you have to fill all the gaps!");
            return ;
        }
        let arr = this.parentNode.getElementsByClassName("arr")[0];
        let sum = this.parentNode.getElementsByClassName("sum")[0];
        let arr_str = [];
        for(let i=1;i<=n;i++){
            let x = a + (i-1)*d;
            arr_str.push(x);
        }
        arr.innerHTML = "a = [" +  arr_str + "]";
        let an = a + (d*(n-1));
        sum.innerHTML = "sum = " + (((a + an)/2) * n);


    }
    display(){
        document.body.appendChild(this.section);
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
                            //document.getElementsByClassName("calc")[0].click();
                        }
                    }
                });
        }
    }
}
let x = new Display();
let y = new Display();
let z = new Display();
let o = new Display();
x.display();
y.display();
z.display();
o.display();