import { useState, useEffect } from "react";

export function InfoContent({ pokemonName, compact = false, hideName = false }) {
    const [pokemon, setPokemon] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!pokemonName) return;

        const fetchData = async () => {
            try {
                const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const pokemonData = await pokemonRes.json();
                setPokemon(pokemonData);

                const speciesRes = await fetch(pokemonData.species.url);
                const speciesData = await speciesRes.json();

                const entry = speciesData.flavor_text_entries.find(
                    (e) => e.language.name === (speciesData.names.some((n) => n.language.name === "es") ? "es" : "en")
                );

                const cleanText = entry?.flavor_text?.replace(/[\n\f]/g, " ") || "Sin descripcion.";
                setDescription(cleanText);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [pokemonName]);

    if (!pokemon) return <p className="flex h-full w-full items-center justify-center text-xs text-white">Cargando...</p>;

    if (compact) {
        return (
            <div className="flex h-full w-auto flex-col justify-center gap-1 overflow-hidden px-2 text-white">
                <div className="flex flex-wrap items-center gap-1">
                    {!hideName ? <h2 className="capitalize font-bold text-[12px]">{pokemon.name}</h2> : null}
                    <p className="text-[11px] font-bold">#{pokemon.id.toString().padStart(3, "0")}</p>
                    <div className="flex flex-wrap gap-1">
                        {pokemon.types.map((t) => (
                            <span key={t.type.name} className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold capitalize">
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="overflow-hidden text-[10px] italic leading-[1.35]">
                    "{description}"
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start justify-center p-2 pl-4 text-white">
            <div className="flex gap-2 justify-center items-center">
                {!hideName ? <h2 className="capitalize font-bold text-[16px]">{pokemon.name}</h2> : null}
                <p className="text-sm font-bold">#{pokemon.id.toString().padStart(3, "0")}</p>
                <div className="flex">
                    {pokemon.types.map((t) => (
                        <span key={t.type.name} className="capitalize text-[15px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-[15px] italic leading-tight mt-2">
                "{description}"
            </p>
        </div>
    );
}
