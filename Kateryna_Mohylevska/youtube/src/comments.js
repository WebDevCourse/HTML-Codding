const commentInput = document.querySelector(".comments__typing");
const commentRight = document.querySelector(".comments_right");

commentInput.addEventListener("click",async (ev) =>{
    let youtubeConfidence = "<p class='comments__agreement'>Виконуючи цю дію, ви створюєте і приймаєте\n" +
        "                        <a href='#' class='comments__condition'>Умови використання YouTube</a>\n" +
        "                    </p>\n" +
        "                    <input type=\"submit\" value=\"Коментувати\" class=\"comments__submit\">\n" +
        "                    <button type='button' class=\"comments__cancel\">Cancel</button>";
    commentRight.innerHTML +=  youtubeConfidence;
})


const getData = async () => {
    let response = await fetch("http://localhost:3004/comments");
    data = await response.json();
    console.log(data[0]);
    //render(data);
}

getData();

// commentInput.addEventListener("keyup", (ev) => {
//     console.log("nksj");
//     console.log(commentInput.value);
//     if(commentInput.value != ''){
//         console.log(commentInput.value);
//         let commentSubmit = document.querySelector('.comments__submit');
//
//         if(commentSubmit.disabled = true){
//             commentSubmit.disabled = false;
//         }
//     }
// })
console.log(document.querySelector(".comments__add"));
document.querySelector(".comments__add")
    .addEventListener("submit", async (ev) => {
        ev.preventDefault();

        let form = ev.target;
        let profileImg = "https://yt3.ggpht.com/-pED72tp_J4I/AAAAAAAAAAI/AAAAAAAAAAA/NSdSLw9JUtE/s48-c-k-no-mo-rj-c0xffffff/photo.jpg";
        let name = "Kateryna Mohylevska";
        let commentText = form["comment-text"].value;
        let time = "2 роки тому";
        let number = 20;

        const response = await fetch("http://localhost:3004/comments", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({profileImg, name, time, commentText,number})
        })

        const comment =  await response.json();

        data.push(comment);
        //render(data);
    });

// if(document.querySelector(".comments__cancel")){
//     console.log("bla1");
//     let commentCancel = document.querySelector(".comments__cancel");
//     commentCancel.addEventListener("click",async (ev) =>{
//         console.log("bla");
//         document.querySelector(".comments__condition").remove();
//         document.querySelector(".comments__submit").remove();
//         document.querySelector(".comments__cancel").remove();
//     })
// }

//
// let data = [];
//
