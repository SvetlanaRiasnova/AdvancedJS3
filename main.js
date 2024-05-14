const userInput = document.querySelector(".user__input_prod"),
      userComment = document.getElementById("user__comment"),
      sendBtn = document.querySelector(".send__btn"),
      messageResult = document.querySelector(".message"),
      errorMessage = document.querySelector(".message"),
      allCommentBtn = document.querySelector(".all__btn");

sendBtn.addEventListener("click", () => {
    
        if (userInput.value !== " " && userComment.value  !== " ") {
            localStorage.setItem(userInput.value, userComment.value);
            messageResult.textContent = "Ваш отзыв успешно отправлен";
        } else {
            messageResult.textContent = "Не все поля заполнены";
        };

    setTimeout(() => {
        userInput.value = " ";
        userComment.value = " ";
    }, 300); 
    

    setTimeout(() => {
        messageResult.textContent = " ";
        errorMessage.textContent = " ";
        
    }, 5000);
})

allCommentBtn.addEventListener("click", () => {
    window.open("comments.html");
})

