
var titulo = document.getElementById('titulo_pagina')
var primiera_linha = document.getElementById('linha1')
var imagem = document.getElementById('imagem')
var body = document.body;
var agora = new Date()
var hora = agora.getHours()
primiera_linha.innerHTML = `<strong>Agora são ${hora} horas</strong>`

if (hora < 12 && hora > 5 ) {
    titulo.innerHTML  = 'Bom dia!!'
    imagem.src = "manha.jpg";
    body.style.backgroundColor = "#d8d1c5"

} else if (hora < 18 && hora > 12) {
    titulo.innerHTML = 'Boa Tarde!!'
    imagem.src = "tarde.jpg";
    body.style.backgroundColor = "#42755d"

} else if (hora < 23 && hora > 18) {
    titulo.innerHTML = 'Boa Noite!!'
    imagem.src = "noite.jpg";
    body.style.backgroundColor = "#191970"

} else {
    titulo.innerHTML = ('Eita ja esta de madrugada')
    imagem.src = "madrugada.jpg";
    body.style.backgroundColor = "#2c6c8b"
}


