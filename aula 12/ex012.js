var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 5 ) {
    console.log('bom dia!')
} else if (hora < 18 && hora > 12) {
    console.log('Boa tarde!')
} else if (hora < 23 && hora > 18) {
    console.log('Boa noite!')
} else {
    console.log('Eita ja esta de madrugada')
}