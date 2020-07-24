// selecionar elemento
var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendando e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";