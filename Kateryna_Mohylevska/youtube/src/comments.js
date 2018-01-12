const commentInput = document.querySelector(".comments__typing");
const commentRight = document.querySelector(".comments_right");

commentInput.addEventListener("click",  (ev) => {
    let youtubeConfidence = "<p class='comments__agreement'>Виконуючи цю дію, ви створюєте і приймаєте\n" +
        "                        <a href='#' class='comments__condition'>Умови використання YouTube</a>\n" +
        "                    </p>\n" +
        "                    <input type=\"submit\" value=\"Коментувати\" class=\"comments__submit\">\n" +
        "                    <button type='button' class=\"comments__cancel\">Cancel</button>";
    commentRight.innerHTML += youtubeConfidence;
    document.querySelector(".comments__add")
        .addEventListener("submit", addComment);
    let commentCancel = document.querySelector(".comments__cancel");

    commentCancel.addEventListener("click", (ev) =>{
        console.log("bla");
        document.querySelector(".comments__agreement").remove();
        document.querySelector(".comments__submit").remove();
        document.querySelector(".comments__cancel").remove();
        form["comment-text"].value = "";
    })
});


function addComment(event) {
    event.preventDefault();
    let form = event.target;
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

    fetch("http://localhost:3000/comments", {
        method: 'POST', body: JSON.stringify(data), headers: {
            "Content-type": "application/json"
        }
    });

    let output = `<section class="comments-element">
                    <img class="profile-img" src="${profileImg}" width="40" height="40">
                    <article class="comments-element__content">
                        <h5 class="comments-element__name">${name}</h5>
                        <time class="comments-element__time">${time}</time>
                        <p class="comments-element__text">${commentText}</p>
                        <aside class="comments-element__respond">
                            <button class="comments-element__answer">відповісти</button>
                            <span class="comments-element__respond-number">${number}</span>
                            <i class="material-icons comments-element__like">thumb_up</i>
                            <i class="material-icons comments-element__dislike">thumb_down</i>
                        </aside>
                        <button class="comments-element__see-comments">
                            Переглянути відповідь
                        </button>
                    </article>
                </section>`;

    let templateName = "commentsTemplate";
    let source = document.getElementById(templateName);
    source.insertAdjacentHTML('afterEnd',output);
    form["comment-text"].value = "";

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
