export type pokemonCollection = {
    count: number;
    next: string;
    previous: string | null;
    results:{
        name: string;
        url: string;
    }[]
}

export type pokemonDescription = {
    name: string;
    abilities: {
        ability: subDescription
    }[];
    height: number;
    weight: number;
    moves: {
        move: subDescription
    }[];
    sprites: {
        front_default: string;
    }
}

export type subDescription = {
    name: string;
}