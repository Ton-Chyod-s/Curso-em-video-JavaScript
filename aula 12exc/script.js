
var titulo = document.getElementById('titulo_pagina')
var primiera_linha = document.getElementById('linha1')
var agora = new Date()
var hora = agora.getHours()
primiera_linha.innerHTML = `Agora são exatamente ${hora} horas`

if (hora < 12 && hora > 5 ) {
    titulo.innerHTML  = 'Bom dia!!'
} else if (hora < 18 && hora > 12) {
    titulo.innerHTML = 'Boa Tarde!!'
} else if (hora < 23 && hora > 18) {

} else {
    titulo.innerHTML = ('Eita ja esta de madrugada')
}


 