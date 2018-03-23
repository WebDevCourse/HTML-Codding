const dynamicArea = document.querySelector(".dynamic-area");
let checkBoxes = Array.from(document.querySelectorAll(".checkbox"));


const database = ["A", "B", "A"];


const render = () => {
    dynamicArea.innerHTML = "";
    let checkedBoxes = checkBoxes.filter((el, i) => el.checked);

    let dataToRender = [];

    for (let i = 0; i < database.length; ++i) {
        for (let j = 0; j < checkedBoxes.length; ++j) {
            if (database[i] === checkedBoxes[j].id) {
                dataToRender.push(database[i]);
                break;
            }
        }
    }

    dataToRender.map((el, i) => {
        let elem = document.createElement("div");
        elem.classList.add("name");
        elem.innerHTML = el;
        dynamicArea.appendChild(elem);
    });
};

render();

document.body.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("checkbox")) render();
});
