import { httpClient } from "../plugins";

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // const resp = await fetch(url);
  const pokemon = await httpClient.get(url);

  // throw new Error('No se encontró el pokemon');

  return pokemon.name;
};
