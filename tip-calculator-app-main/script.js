let bill = document.querySelector(".bill");
let button = document.querySelectorAll(".button");
let person = document.querySelector(".person")

button.forEach((event) => event.addEventListener("click", teste))


function teste(event) {
  const tip = parseInt(event.target.innerText.replace("%", ""));
  console.log(person.value);
  if (person.value < 0) {
    console.log("0 nao pode")
  }
  else {
    console.log("maior que zero")
  }
}