const PokemonsList = ({pokemons}) =>{
    return(
        <>
            {pokemons.results?.map(pokemon =>{
                const id = pokemon.url.split('/').at(-2)
                const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                return (
                    <article key={pokemon.url}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemonImage} className="w-40" alt="" />
                    </article>
                )
            })}
        </>
        
    )
}
export default PokemonsList