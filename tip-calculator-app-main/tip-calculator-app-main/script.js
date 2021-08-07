let bill = document.querySelector(".bill");
let button = document.querySelectorAll(".button");
let person = document.querySelector(".person")
let total = document.querySelector(".total");
let amount = document.querySelector(".amount");


button.forEach((event) => event.addEventListener("click", teste))


function teste(event) {
  const tip = parseInt(event.target.innerText.replace("%", ""));
  const people = parseInt(person.value);
  if (people < 0 || isNaN(people) == true) {
    console.log("0 nao pode")
  }
  else {
    const costtotal =  ((bill.value * tip )/ 100).toFixed(2);
    const divide = (costtotal / people).toFixed(2);
    amount.innerHTML = divide;
    total.innerHTML = costtotal;
  }
}