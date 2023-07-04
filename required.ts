interface Rquire {
    name?: string
    location?:string

}

let Edwin: Required<Rquire> = { //aqui con la funcion Required le pasamos que todas las variables sean requeridas
    name:'Edwin',
    location:'RD'
}

let Adrian: Partial<Rquire> = { //con Partial usamos la interface pero no necesariamente tenemos que usar todas la variables
    name:'Adrian'
}