import axios from "axios";
import Pokemon from './Pokemon'
import PokemonRepository from "./PokemonRepository";
export default class PokeApi implements PokemonRepository{
    getPokemon(id:number):Promise<Pokemon>{
        return new Promise<Pokemon>((resolves)=>{
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(({data}: any) => {
                resolves( new Pokemon(data.id,data.name,
                    data.base_experience,data.height,data.weight))
                });
        })
    }
}