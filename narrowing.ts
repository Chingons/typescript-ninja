
function mostrarLongitud (objeto: number | string){
    if (typeof objeto=='string'){
        return objeto.length
    }
    return objeto.toString().length
}

mostrarLongitud('1')


interface Mario {
    company: 'Nintendo',
    nombre: string,
    saltar: ()=> void
}

interface Sonic {
    company:'Sega',
    nombre: string,
    correr: ()=> void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje){
    if (personaje.company == 'Nintendo'){
        personaje.saltar()
        return
    }
    personaje.correr()
}

function checkIsSonic(personaje: Personaje): personaje is Sonic{
    return (personaje as Sonic).correr != undefined
}


function jugar2(personaje: Personaje){
    if (checkIsSonic(personaje)){
        personaje.correr()
        return
    }
    else {
        personaje.saltar()
        return
    }
}