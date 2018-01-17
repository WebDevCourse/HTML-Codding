document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let commentForm = document.querySelector(".comment-form");
    commentForm.addEventListener("submit", createComment);

    let commentList = document.querySelector(".comment-list");
    commentList.addEventListener("click", onRemoveBtnClick);

    getAllComments();

    /**
     * Get all comments from server
     */
    function getAllComments() {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", commentsReceived);
        xhr.addEventListener("error", transferFailed);

        xhr.open('GET', '/comments');
        xhr.send();
    }

    /**
     * Save new command - send data to server
     */
    function createComment(event) {
        event.preventDefault();

        let xhr = new XMLHttpRequest(),
            data = {
                message: commentForm.message.value
            };
        data.message = data.message.trim().replace(/(<([^>]+)>)/ig, "");

        if (data.message === "") {
            showError("Please, don't leave message body empty!");
            return false;
        }

        xhr.addEventListener("load", commentSaved);
        xhr.addEventListener("error", transferFailed);

        xhr.open('POST', '/comments');
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
    }

    /**
     * Comment was saved on server and we can add it
     */
    function commentSaved() {
        let data = JSON.parse(this.responseText);
        drawComment(data);
    }

    /**
     * Create comment dom node and add to list
     * @param data
     */

    function drawComment(data) {
        let commentElement = document.createElement("article");
        let d = new Date();
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();

        commentElement.setAttribute("data-id", data.id);
        commentElement.className = "comment";
        commentElement.innerHTML = "<header>" +
            "Admin " + curr_date + "." + curr_month + "." + curr_year +
            "</header><p>" + data.message +
            "</p>" +
            "<span class='comment-form__answer'>Відповісти</span>" +
            "<span class='comment-form__like'>like</span>" +
            "<span class='comment-form__dislike'>dislike </span>" +
            "<footer class='comment__tools'><button class='btn btn--circle js-remove'>&cross;</button></footer>";

        commentList.insertBefore(commentElement, commentList.firstChild);
    }

    /**
     * All comments were received from server
     */
    function commentsReceived() {
        if (this.status >= 200) {
            let comments = JSON.parse(this.responseText);
            comments.forEach(function (comment) {
                drawComment(comment);
            })
        }
        else {
            transferFailed();
        }
    }

    /**
     * Listen remove btn click and send DELETE request to server
     * @param event
     */
    function onRemoveBtnClick(event) {
        let target = event.target;

        if (target.classList.contains("js-remove")) {
            while (target !== event.currentTarget) {
                target = target.parentNode;
                if (target.classList.contains("comment")) break;
            }

            let xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function () {
                removeComment(target)
            }); //використаємо замикання, щоб отримати target
            xhr.addEventListener('error', transferFailed);

            xhr.open("DELETE", "/comments/" + target.getAttribute("data-id"));
            xhr.send();
        }
    }

    /**
     * Remove comment from DOM
     * @param target
     */
    function removeComment(target) {
        commentList.removeChild(target);
    }

    /**
     * Error handler for all requests
     */
    function transferFailed() {
        showError("An error occurred while transferring the file.");
    }

    function showError(message) {
        alert(message);
    }
}
