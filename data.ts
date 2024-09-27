export interface Pokemon {
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
        defense: 40,
    },
    {
        name: "Charmander",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        type: "Fire",
        rarity: "Common",
        hp: 39,
        attack: 52,
        defense: 43,
    },
    {
        name: "Squirtle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        type: "Water",
        rarity: "Common",
        hp: 44,
        attack: 48,
        defense: 65,
    },
    {
        name: "Caterpie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        type: "Bug",
        rarity: "Common",
        hp: 45,
        attack: 30,
        defense: 35,
    },
    {
        name: "Ekans",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        type: "Poison",
        rarity: "Common",
        hp: 35,
        attack: 60,
        defense: 44,
    },
    {
        name: "Pidgey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        type: "Normal",
        rarity: "Common",
        hp: 40,
        attack: 45,
        defense: 40,
    },
];