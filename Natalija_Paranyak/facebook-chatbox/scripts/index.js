const formMessageCreation = document.querySelector(".create-message");

const addMessage = (evt) => {
    let messages = document.querySelectorAll(".message_you");

    let usersText = messages[messages.length -1].querySelectorAll(".message__your-text");

    if (evt.keyCode === 13) {
        evt.preventDefault();
        console.log(usersText);
        if(usersText.length === 1){
            usersText[0].classList.add('message__your-text_first');
        }else{
            usersText[usersText.length-1].classList.add('message__your-text_middle');
            usersText[usersText.length-1].classList.remove('message__your-text_last');
        }
        let item = `<p class="message__your-text message__your-text_last">${document.querySelector(".create-message__text").value}</p>`;
        if(document.querySelector(".create-message__text").value.length < 30){
            item = `<p class="message__your-text message__small-text message__your-text_last">${document.querySelector(".create-message__text").value}</p>`;
        }
        messages[messages.length -1].innerHTML += item;
        formMessageCreation.reset();
    }
};


formMessageCreation.addEventListener('keypress', addMessage, false);




