
let card = document.querySelector(".card");
let closeCardBtn = document.querySelector(".close-card-btn");

let openCardBtn = document.querySelector(".open-card-btn");





/*close card */
closeCardBtn.onclick = function() {
    card.classList.remove("card-open");
    card.classList.add("card-closed");
}

/*open card*/
openCardBtn.onclick = function() {
    card.classList.remove("card-closed");
    card.classList.add("card-open");
}