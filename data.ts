interface Pokemon {
    name: string;
    url: string;
    type: string;
    rarity: string;
    hp: number;
    attack: number;
    defense: number;
}

export const pokemons: Pokemon[] = [
    {
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
        type: "Electric",
        rarity: "Common",
        hp: 35,
        attack: 55,
        defense: 40
    },
    {
        name: "Charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
        type: "Fire/Flying",
        rarity: "Rare",
        hp: 78,
        attack: 84,
        defense: 78
    },
    {
        name: "Bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        type: "Grass/Poison",
        rarity: "Common",
        hp: 45,
        attack: 49,
        defense: 49
    },
    {
        name: "Gengar",
        url: "https://pokeapi.co/api/v2/pokemon/94/",
        type: "Ghost/Poison",
        rarity: "Rare",
        hp: 60,
        attack: 65,
        defense: 60
    },
    {
        name: "Lapras",
        url: "https://pokeapi.co/api/v2/pokemon/131/",
        type: "Water/Ice",
        rarity: "Legendary",
        hp: 130,
        attack: 85,
        defense: 80
    }
];
