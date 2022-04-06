let thanks = document.querySelector(".thanks")
let rating = document.querySelector(".rating");
let button = document.querySelector(".button");
let listLi = document.querySelectorAll(".list > li");
let noteRating = document.querySelector(".noteRating")

button.addEventListener("click", handleClick);
listLi.forEach((event) => event.addEventListener("click", Teste));

function handleClick(){
    rating.classList.toggle("hidden");
    thanks.classList.toggle("hidden");
}

function Teste(e){
    LiCss(e);
    noteRating.textContent = e.target.textContent;
}

function LiCss(e){
    listLi.forEach(e => e.classList.remove("active"));
    e.target.classList.add("active");
}
