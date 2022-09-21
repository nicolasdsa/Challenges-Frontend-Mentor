let id = document.getElementById("id");
let advice = document.getElementById("advicePhrase");
window.addEventListener("load", requestAPI);

async function requestAPI() {
  const fetchAdvice = await fetch("https://api.adviceslip.com/advice");
  const fetchAdviceJSON = await fetchAdvice.json();
  console.log(fetchAdviceJSON);
  id.textContent = fetchAdviceJSON.slip.id;
  advice.textContent = `❝${fetchAdviceJSON.slip.advice}❞`;
}
