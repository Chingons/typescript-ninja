class Avenger{
    readonly name: string
    powerScore: number
    wonBattles: number = 0
    constructor (name:string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }

    get fullName(){
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower:number){
        if (newPower<=100){
            this.powerScore = newPower
        } else{
            throw new Error('Power score cannot be more than 100')
        }
    }

}

const avengers = new Avenger('Edwin', 100)

avengers.power

avengers.name = 'asd' //no se puede cambiar el valor de name ya que esta con la propiedad 'readonly' que significa que solo es de lectura