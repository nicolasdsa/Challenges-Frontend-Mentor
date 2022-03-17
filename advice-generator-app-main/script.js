window.addEventListener('load', requestAPI);
let id = document.querySelector('.id');
let advice = document.querySelector('.advice');
let button = document.querySelector('.random');
button.addEventListener('click', requestAPI);

async function requestAPI(){
    const fetchAdvice = await fetch("https://api.adviceslip.com/advice");
    const fetchAdviceJSON = await fetchAdvice.json();
    id.textContent = fetchAdviceJSON.slip.id;
    advice.textContent = `❝${fetchAdviceJSON.slip.advice}❞`;

}

