const taskList = document.querySelector(".task-list");

const formTaskCreation = document.querySelector(".task-creation");

let currentValue = "";

const checkName = (evt) => {
    if (evt.keyCode === 13) {
        evt.preventDefault();
        const item = `<div class="task-list__item">
        <form class="task-element">
                        <textarea class="task-element__input" rows="1" cols="50" style="border:none;" readonly disabled>${document.querySelector(".task-creation__input").value}</textarea>
        </form>
        <button class="task-list__button task-list__button_edit">Edit</button>
        <button class="task-list__button task-list__button_remove">Remove</button>
        </div>`;
        taskList.innerHTML += item;
        formTaskCreation.reset();
    }
};

const editTask = (evt) => {

    if (evt.keyCode === 27){
        console.log("esc " + currentValue);
        evt.target.setAttribute("readonly", "");
        evt.target.setAttribute("disabled", "");
        evt.target.setAttribute("border", "none");
        evt.target.style.border = "none";
        evt.target.value = currentValue;
    }
    if (evt.keyCode === 13){
        console.log("13");
        evt.target.setAttribute("readonly", "");
        evt.target.setAttribute("disabled", "");
        evt.target.setAttribute("border", "none");
        evt.target.style.border = "none";
    }

};

formTaskCreation.addEventListener('keypress', checkName, false);


taskList.addEventListener('click', (ev) => {
    if (ev.target.matches(".task-list__button_remove")){
        ev.target.parentElement.remove();
    }

}, false);

taskList.addEventListener('click', (ev) => {
    if (ev.target.matches(".task-list__button_edit")){

        //for choosing only 1 task per time
        var allTasks = document.querySelectorAll(".task-element__input"), i;
        for (i = 0; i < allTasks.length; ++i) {
            // console.log("hello");
            allTasks[i].setAttribute("readonly", "");
            allTasks[i].setAttribute("disabled", "");
            allTasks[i].setAttribute("border", "none");
            allTasks[i].style.border = "none";
        }


        let elem = ev.target.parentElement.querySelector(".task-element__input");

        currentValue = elem.value;

        elem.removeAttribute("readonly");
        elem.removeAttribute("disabled");
        elem.style.border = "1px solid red";
        const taskEdited = elem;
        // taskEdited.addEventListener('keydown', editTask, false);
        taskEdited.addEventListener('keydown', editTask, false);


    }

}, false);


