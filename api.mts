const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto"

const response = await fetch(API_URL)

if (!response.ok){
    throw new Error('Request failed')

}

const data = await response.json()

const repos = data.map(x =>{
    console.log(x)
} );