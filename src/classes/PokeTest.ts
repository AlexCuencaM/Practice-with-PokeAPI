import Pokemon from './Pokemon'
import PokemonRepository from "./PokemonRepository";
function getRandomInt() {        
    let min:number = Math.ceil(1);
    let max:number = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
const data={
    name:"Test",
    base_experience:getRandomInt(),
    height:getRandomInt(),
    weight:getRandomInt(),
}
export default class PokeApi implements PokemonRepository{
    getPokemon(id:number):Promise<Pokemon>{
        return new Promise<Pokemon>(async (resolves)=>{            
                resolves( new Pokemon(id,data.name,
                    data.base_experience,data.height,data.weight))                
        })
    }
}