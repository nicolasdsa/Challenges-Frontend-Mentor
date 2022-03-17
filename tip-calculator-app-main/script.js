let bill = document.querySelector(".bill");
let button = document.querySelectorAll(".button");
let person = document.querySelector(".person")
let total = document.querySelector(".total");
let amount = document.querySelector(".amount");
let custom = document.querySelector(".custom");
let resetButton = document.querySelector(".reset");

amount.innerHTML = "0.00";
total.innerHTML = "0.00";

button.forEach((event) => event.addEventListener("click", teste));
custom.addEventListener("change", Tipcustom);
resetButton.addEventListener("click", resetFunction);

function teste(event) {
  const tip = parseInt(event.target.innerText.replace("%", ""));
  const people = parseInt(person.value);
  if (people < 0 || isNaN(people) == true) {
    console.log("0 nao pode")
  }
  else {
    const costtotal =  parseFloat(bill.value) + (bill.value * ( tip / 100));
    const divide = (costtotal / people).toFixed(2);
    amount.innerHTML = divide;
    total.innerHTML = costtotal;
  }
}

function Tipcustom(){
  const tip = parseInt(custom.value);
  const people = parseInt(person.value);
  if (people < 0 || isNaN(people) == true) {
    console.log("0 nao pode custom")
  }
  else {
    const costtotal =  parseFloat(bill.value) + (bill.value * ( tip / 100));
    const divide = (costtotal / people).toFixed(2);
    amount.innerHTML = divide;
    total.innerHTML = costtotal;
  }
}

function resetFunction(){
  amount.innerHTML = "0.00";
  total.innerHTML = "0.00";
  person.value = "0";
  bill.value = "0";

}