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
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        type: "Electric",
        rarity: "Common",
        hp: 35,
        attack: 55,
        defense: 40
    },
    {
        name: "Charizard",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        type: "Fire/Flying",
        rarity: "Rare",
        hp: 78,
        attack: 84,
        defense: 78
    },
    {
        name: "Bulbasaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        type: "Grass/Poison",
        rarity: "Common",
        hp: 45,
        attack: 49,
        defense: 49
    },
    {
        name: "Gengar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        type: "Ghost/Poison",
        rarity: "Rare",
        hp: 60,
        attack: 65,
        defense: 60
    },
    {
        name: "Lapras",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        type: "Water/Ice",
        rarity: "Legendary",
        hp: 130,
        attack: 85,
        defense: 80
    }
];
