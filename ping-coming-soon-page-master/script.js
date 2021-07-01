let button = document.querySelector(".teste");
let text = document.querySelector(".text")

button.addEventListener("click", email);

function email(){
  let usuario = text.value.substring(0, text.value.indexOf("@"));
  let dominio = text.value.substring(text.value.indexOf("@")+ 1, text.value.length);

if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
alert("E-mail valido");
text.classList.add("right")
}
else{
alert("E-mail invalido");
text.classList.add("wrong")

}
}