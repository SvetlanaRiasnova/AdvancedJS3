const allComments = document.querySelector(".allComments");

for (let i = 0; i < localStorage.length; i++) {

    //создаем разметку
    const commItem = document.createElement("div");
    const prodList = document.createElement('h3');
    const prodComm = document.createElement('div');
    prodComm.classList.add("hidden");

    // заполняем данными из LocalStorage
    let prod = localStorage.key(i);
    let comm = localStorage.getItem(localStorage.key(i));

    prodList.textContent = prod;
    prodComm.textContent = comm;

    // создаем кнопки управления
    const readCommentBtn = document.createElement('button');
    readCommentBtn.textContent = "Читать все";
    const removeCommentBtn = document.createElement('button');
    removeCommentBtn.textContent = "Удалить";

    // добавляем все элементы на страницу
    allComments.appendChild(commItem);
    commItem.appendChild(prodList);
    commItem.appendChild(prodComm);
    commItem.appendChild(readCommentBtn);
    commItem.appendChild(removeCommentBtn);

    // обрабатываюм событие кнопки развернуть комментарий
    readCommentBtn.addEventListener("click", () => {
        prodComm.classList.toggle("hidden");
        if (prodComm.classList == "hidden") {
            readCommentBtn.textContent = "Читать все";
        } else readCommentBtn.textContent = "Свернуть";
    })

    // обрабатываюм событие кнопки удалить комментарий
    removeCommentBtn.addEventListener("click", () => {
        localStorage.removeItem(prod);
        localStorage.removeItem(comm);
        commItem.remove();
    })
}

