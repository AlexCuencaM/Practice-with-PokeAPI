import Pokemon from './Pokemon'
export default interface PokemonRepository{
    getPokemon(id:number):Promise<Pokemon>
}