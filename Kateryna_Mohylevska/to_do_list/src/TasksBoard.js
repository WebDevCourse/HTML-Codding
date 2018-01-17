import JsonActions from "./JsonActions";

class TasksBoard {
    constructor(root_element, data_name) {
        this.root_elemet = root_element;
        this.json_act = new JsonActions(data_name);
        this.tasksList = this.root_elemet.querySelector(".tasks-list");
        this.taskForm = this.root_elemet.querySelector(".tasks-block__form");
    }

    async render() {
        let data = await this.json_act.getData();
        console.log(data);
        data.map(task => this.drawTask(task)).join("");
        this.taskForm.addEventListener("submit", this.addTask.bind(this));
        this.tasksList.addEventListener('click', this.editTask.bind(this));
        this.tasksList.addEventListener('click', this.deleteTask.bind(this));
        this.tasksList.addEventListener('click', this.checkbox.bind(this));
    };

    drawTask(task) {
        let checked = "";
        if (task["checked"] === true) {checked = "checked";}

        let taskHTML = `<article class="task" task-id="${task["id"]}">
                        <aside class="task__box-text">
                            <input type="checkbox" id="t${task["id"]}" class="task__check" ${checked}>
                            <label for="t${task["id"]}" class="task__text">${task["task-text"]}</label>
                        </aside>
                        <aside class="task__buttons">
                            <button class="task__edit">Edit</button>
                            <button class="task__delete">Delete</button>
                        </aside>
                    </article>`;

        let previousTask = this.root_elemet.querySelectorAll(".task")[0];
        if (previousTask) {
            previousTask.insertAdjacentHTML('beforebegin', taskHTML);
        }
        else {
            this.tasksList.innerHTML = taskHTML;
        }
    };

    addTask(ev) {
        ev.preventDefault();
        let form = ev.target;
        let task = {
            "task-text": form['task-text'].value,
            "checked": false
        };
        this.json_act.addData(task);
        this.drawTask(task);
        form['task-text'].value = "";
    };

    editTask(event) {
        let target = event.target;
        if (target.classList.contains("task__edit")) {
            target = this.findParentTask(target);
            let buttons = target.querySelector(".task__buttons");
            let checkBox = target.querySelector(".task__box-text");
            let taskId = target.getAttribute("task-id");

            target.removeChild(buttons);
            target.removeChild(checkBox);

            let editInput = document.createElement("input");
            editInput.classList.add("task_editable-text");
            editInput.setAttribute("value", checkBox.querySelector(".task__text").innerHTML);
            target.appendChild(editInput);
            target.querySelector(".task_editable-text").focus();

            document.addEventListener("keydown", async (ev) => {
                if (ev.keyCode == 13) {
                    this.json_act.editData({"task-text": target.querySelector(".task_editable-text").value},taskId);
                    checkBox.querySelector(".task__text").innerHTML = target.querySelector(".task_editable-text").value;
                }
                if(ev.keyCode == 27 || ev.keyCode == 13){
                    target.removeChild(editInput);
                    target.appendChild(checkBox);
                    target.appendChild(buttons);
                }
            })
        }
    };

    findParentTask(target){
        while (!target.classList.contains("task")) {
            target = target.parentNode;
        }
        return target;
    }

    deleteTask(event) {
        let target = event.target;
        if (target.classList.contains("task__delete")) {
            target = this.findParentTask(target);
            this.json_act.deleteData(target.getAttribute("task-id"));
            this.tasksList.removeChild(target);
        }
    }

    async checkbox(event) {
        let target = event.target;
        if (target.classList.contains("task__text")) {
            target = this.findParentTask(target);
            let changedCheck = false;
            if (target.querySelector(".task__check").checked === false) {
                changedCheck = true;
            }

            let taskId = target.getAttribute("task-id");
            let task = {
                "checked": changedCheck
            };
            this.json_act.editData(task,taskId);
        }
    }
}

let root_element = document.querySelector(".tasks-block");
let c = new TasksBoard(root_element, "tasks0");
c.render();