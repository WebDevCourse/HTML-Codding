const tasksList = document.querySelector(".tasks-list");
const taskForm = document.querySelector(".task-form");

taskForm.addEventListener("submit", async (ev) =>{
    ev.preventDefault();
    let form = ev.target;

    let data = {
        "task-text":form['task-text'].value
    }
    await fetch("http://localhost:3000/tasks", {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    drawTask(data);
    form['task-text'].value = "";
})

const editTask = (event) => {
    let target = event.target;
    if (target.classList.contains("task__edit")){
        while (!target.classList.contains("task")) {
            target = target.parentNode;
        }
        console.log(target.querySelector(".task__text").innerHTML);
        taskForm['task-text'].value = target.querySelector(".task__text").innerHTML;
        fetch("http://localhost:3000/tasks/" + target.getAttribute("task-id"), {
            method: "DELETE"
        }).then(
            response =>
                response.json()
                    .then(json => {
                        return json;
                    })
        )

        tasksList.removeChild(target);
    }
}


const deleteTask = (event) => {
    let target = event.target;

    if (target.classList.contains("task__delete")){
        while (!target.classList.contains("task")) {
            target = target.parentNode;
        }
        fetch("http://localhost:3000/tasks/" + target.getAttribute("task-id"), {
            method: "DELETE"
        }).then(
            response =>
            response.json()
                .then(json => {
                return json;
            })
        )

        tasksList.removeChild(target);
    }

}

const drawTask = (task) => {
    let taskHTML = `<article class="task">
                        <input type="checkbox"  class="task__check">
                        <p class="task__text">${task["task-text"]}</p>
                        <button class="task__edit">Edit</button>
                        <button class="task__delete">Delete</button>
                    </article>`;
    let previousTask = document.querySelectorAll(".task")[0];

    if(previousTask){
        previousTask.insertAdjacentHTML('beforebegin', taskHTML);
    }
    else{
        tasksList.innerHTML = taskHTML;
    }
    document.querySelectorAll(".task")[0].setAttribute('task-id', task["id"]);
};

const loadJSON = (callback) => {
    fetch('data/data.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            return response.text();
        }
    }).then(function (text) {
        callback(text);
    });
}

const init = () => {
    loadJSON(function (response) {
        let actual_JSON = JSON.parse(response);
        let tasks = actual_JSON["tasks"];
        for (task in tasks) {
            drawTask(tasks[task]);
        }
    });
}

init();

tasksList.addEventListener('click', editTask);
tasksList.addEventListener('click', deleteTask);