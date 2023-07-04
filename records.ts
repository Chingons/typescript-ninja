type Vecino = {
    name: string
    casa: number
}


const laCachaza: Record<string, Vecino> = {
    rafael:{
        name:'rafael',
        casa:1
    },
    ivan:{
        name:'ivan',
        casa:2
    }
}

console.log(laCachaza.rafael);

