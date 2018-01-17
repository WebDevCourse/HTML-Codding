
 // TODO :add form, post content from form to server, on server add this content to returning array
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const dynamicArea = document.getElementById("dynamic-area");
dynamicArea.addEventListener("click", (ev) => {
    if (ev.target.matches(".word__letter")) {
        ev.target.remove();
    }
});


const magicButton = document.getElementById("magic-button");
magicButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:8080/");
    const text = await response.text();

    let receivedMessage = `<div class="page__word" style="color:${getRandomColor()}" >`; // rgba(236, 240, 241, 1.0) , style="color:${getRandomColor()}"
    let content = text.split("").map((el) => el === " " ? "&nbsp;" : el).map((el) =>`<span class="word__letter">${el}</span>`).join("");
    receivedMessage += content;
    receivedMessage += `</div>`;
    dynamicArea.insertAdjacentHTML('beforeend', receivedMessage); // `<div class="page__block" style="color:${getRandomColor()}">${text}</div>`
});


const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    const wordsToDelete = document.getElementsByClassName("page__word");
    const nodeList = Array.prototype.slice.call(wordsToDelete);
    nodeList.map((el) => {
        el.remove();
    });
});





