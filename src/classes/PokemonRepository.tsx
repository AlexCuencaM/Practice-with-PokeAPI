import Pokemon from './Pokemon'
export default interface PokemonRepository{
    getPokemon(id:string):Promise<Pokemon>
}