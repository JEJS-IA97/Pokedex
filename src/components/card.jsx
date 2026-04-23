import { useState, useEffect } from "react";

export function PokemonCard({ pokemonName }) {
    const [pokemon, setPokemon] = useState(null);
    const [showPixel, setShowPixel] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error('Error:', err));
        }, [pokemonName]);

    if (!pokemon) return <p>Cargando...</p>

return (
    <div className="h-[240px] w-[310px] flex">
        <div className="h-[240px] w-[240px] overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                onClick={() => setShowPixel(!showPixel)}
            />
        </div>

        <div className="flex flex-col">
            <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={pokemon.sprites.back_default}
                    alt="vista trasera"
                />
            </div>
            <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={pokemon.sprites.front_shiny}
                    alt="shiny frontal"
                />
            </div>
            <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={pokemon.sprites.back_shiny}
                    alt="shiny trasera"
                />
            </div>
        </div>
    </div>
);
}