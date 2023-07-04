interface Avengerx{
    name: string
    powerScore: number
    wonBattles: number
    age: number
}


class Wwe implements Avengerx{
    constructor(name:string, powerScore:number, wonBattles:number, age:number){
        this.name = name
        this.powerScore = powerScore
        this.wonBattles = wonBattles
        this.age = age

    }

    get fullname(){
        return `${this.name}, de poder ${this.powerScore}`
    }
}