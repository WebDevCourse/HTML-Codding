const commentInput = document.querySelector(".comments__typing");
const commentRight = document.querySelector(".comments_right");



commentInput.addEventListener("click", async (ev) => {
    let youtubeConfidence = "<p class='comments__agreement'>Виконуючи цю дію, ви створюєте і приймаєте\n" +
        "                        <a href='#' class='comments__condition'>Умови використання YouTube</a>\n" +
        "                    </p>\n" +
        "                    <input type=\"submit\" value=\"Коментувати\" class=\"comments__submit\">\n" +
        "                    <button type='button' class=\"comments__cancel\">Cancel</button>";
    commentRight.innerHTML += youtubeConfidence;
    document.querySelector(".comments__add")
        .addEventListener("submit", addComment);
});


function addComment(event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    let form = event.target;


    xhr.addEventListener('error', transferError);

    let profileImg = "https://yt3.ggpht.com/-pED72tp_J4I/AAAAAAAAAAI/AAAAAAAAAAA/NSdSLw9JUtE/s48-c-k-no-mo-rj-c0xffffff/photo.jpg";
    let name = "Kateryna Mohylevska";
    let commentText = form["comment-text"].value;
    let time = "2 роки тому";
    let number = 20;

    let data = {
        "profile-img": profileImg,
        "name": name,
        "comment-text": commentText,
        "time": time,
        "number": number
    };

    xhr.open("POST", "/comments");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    loadJSON(function (response) {
        let actual_JSON = JSON.parse(response);
        renderData({"comments":actual_JSON["comments"]}, "comments");
    })
}

function transferError() {
    console.log("Error!! ", this.status);
}

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
