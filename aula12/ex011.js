var idade = 11
console.log(`Você tem ${idade} anos`)
if (idade < 16 ) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatorio')
}