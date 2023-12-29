

export const baseApiUrl: string = 'https://pokeapi.co/api/v2';

export const apiUrls = {
	getPokemons: (limit:number) => `${baseApiUrl}/pokemon?limit=${limit}`,
	getSinglePokemonByName: (name:string | null) => `${baseApiUrl}/pokemon/${name}`,
};

export enum ReducerFeatureKeys {
	Collection = 'collection',
	PokemonDetails = 'pokemonDetails'
}