
interface Heroe {
    id: string
    name: string
    age: number
}

const heros: Heroe = {
    id:'1',
    name:'thor',
    age:40
}

interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatilla)[]
}

interface Zapatilla extends Producto {
    talla: number
}

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [{
        id:1,
        nombre:"1",
        precio:100,
        quantity:1
    },
{
    id:2,
        nombre:"2",
        precio:200,
        quantity:2
}]
}

interface CarritoOps {
    add(product:Producto): void,
    remove(id: number): void,
    clear(): void

}