let thanks = document.querySelector(".thanks")
let rating = document.querySelector(".rating");
let button = document.querySelector(".button");
let listLi = document.querySelectorAll(".list > li");

button.addEventListener("click", handleClick);

function handleClick(){
    rating.classList.toggle("hidden");
    thanks.classList.toggle("hidden");
}

