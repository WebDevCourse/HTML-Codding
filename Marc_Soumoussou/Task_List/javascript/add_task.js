function AddTask() {
    var nav = document.createElement("nav");
    nav.classList.add("task-list");
    var check = document.createElement("input");
    check.type="checkbox";
    var inputValue = document.getElementsByClassName("add-task-form__field")[0].value;
    if (inputValue === "") {
        alert("Write smth! Wtf man?")
    }
    else {
        var t = document.createTextNode(inputValue);
        var button1 = document.createElement("button");
        button1.textContent = "Edit";
        button1.classList.add("task-list__edit-button");
        var button2 = document.createElement("button");
        button2.textContent = "Remove";
        button2.classList.add("task-list__remove-button");
        nav.appendChild(check);
        nav.appendChild(t);
        nav.appendChild(button2);
        nav.appendChild(button1);
        document.getElementsByClassName("main-section")[0].appendChild(nav);
    }
    document.getElementsByClassName("add-task-form__field")[0].value = "";
}