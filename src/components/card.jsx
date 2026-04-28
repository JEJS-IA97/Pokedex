import { useState, useEffect } from "react";

export function PokemonCard({ pokemonName, compact = false }) {
    const [pokemon, setPokemon] = useState(null);
    const [showPixel, setShowPixel] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data))
            .catch((err) => console.error("Error:", err));
    }, [pokemonName]);

    if (!pokemon) {
        return <p className="flex h-full w-full items-center justify-center text-xs text-white">Cargando...</p>;
    }

    if (compact) {
        return (
            <div className="h-[160px] w-auto flex gap-1">
                <div className="flex min-w-0 items-center justify-center overflow-hidden rounded-lg bg-black/10">
                    <img
                        className="h-full w-full object-contain p-2"
                        src={showPixel ? pokemon.sprites.front_default : pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        onClick={() => setShowPixel(!showPixel)}
                    />
                </div>

                <div className="flex w-[30%] min-w-[40px] flex-col gap-2">
                    <div className="overflow-hidden rounded-md bg-black/10">
                        <img className="h-full w-full object-contain" src={pokemon.sprites.back_default} alt="vista trasera" />
                    </div>
                    <div className="overflow-hidden rounded-md bg-black/10">
                        <img className="h-full w-full object-contain" src={pokemon.sprites.front_shiny} alt="shiny frontal" />
                    </div>
                    <div className="overflow-hidden rounded-md bg-black/10">
                        <img className="h-full w-full object-contain" src={pokemon.sprites.back_shiny} alt="shiny trasera" />
                    </div>
                </div>
            </div>
        );
    }

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
                    <img className="h-full w-full object-cover" src={pokemon.sprites.back_default} alt="vista trasera" />
                </div>
                <div className="h-[80px] w-[80px] overflow-hidden">
                    <img className="h-full w-full object-cover" src={pokemon.sprites.front_shiny} alt="shiny frontal" />
                </div>
                <div className="h-[80px] w-[80px] overflow-hidden">
                    <img className="h-full w-full object-cover" src={pokemon.sprites.back_shiny} alt="shiny trasera" />
                </div>
            </div>
        </div>
    );
}
