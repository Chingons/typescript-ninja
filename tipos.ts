

type HeroID = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'



type HeroBasicInfo = {
    id?: HeroID
    name: string
}

type HeroProperties = {
   
    age: number
    isActive?:boolean
    powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero = {
    name: "Thor",
    age: 1500
};


function createHero (hero: Hero): Hero{
    const {name, age} = hero
    return {id:crypto.randomUUID(), name, age, isActive: true}
}


type HexadecimalColor = `#${string}`

const thor = createHero({name:"Thor", age: 200})
thor.powerScale = "local"

const color:HexadecimalColor = '#454545'
const color2: HexadecimalColor = '#45454'