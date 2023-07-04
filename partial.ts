interface Person{
    name: string
    age: number
}

let edwin: Partial<Person> = {
    name:"Edwin",
    age:20
}