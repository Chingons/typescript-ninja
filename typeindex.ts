
const address = {
    planet: "Earth",
    city: "Madrid"
}

type Address = typeof address

const address2: Address = {
    planet:"vegeta",
    city:"Santiago"
}


function cliente(){
    return{
        nombre:"Name",
        tel:"000-000-0000"
    }
}

type DataCliente = ReturnType <typeof cliente> 

const cliente2: DataCliente = {
    nombre: "Manuel",
    tel:"85454545"
}