

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const resp = await fetch(url);
    const pokemon = await resp.json();

    // throw new Error('No se encontró el pokemon');
    
    return pokemon.name;
    
}



module.exports = getPokemonById;