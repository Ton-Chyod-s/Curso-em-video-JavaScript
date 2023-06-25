// estudo de objeto
let amigo = {nome: 'josé',
    sexo: 'masculino',
    idade: 30,
    peso: 84.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(amigo.peso)