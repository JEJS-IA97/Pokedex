import { useState, useEffect } from "react";

export function InfoContent({ pokemonName }) {
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
            (e) => e.language.name === (speciesData.names.some(n => n.language.name === 'es') ? 'es' : 'en')
            );

            const cleanText = entry?.flavor_text?.replace(/[\n\f]/g, ' ') || "Sin descripción.";
            setDescription(cleanText);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    fetchData(); }, [pokemonName]);

    if (!pokemon) return <p className="text-white">Cargando...</p>;

    return (
        <div className="flex flex-col items-start justify-center p-2 pl-4 text-white">
            <div className="flex gap-2 justify-center items-center">
                <h2 className="capitalize font-bold text-[16px]">{pokemon.name}</h2>
                <p className="text-sm font-bold">#{pokemon.id.toString().padStart(3, '0')}</p>
                <div className="flex">
                    {pokemon.types.map((t) => (
                        <span key={t.type.name} className="capitalize text-[15px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                            {t.type.name}
                        </span>
                    ))}
                </div>

            </div>

            <p className="text-[15px] italic leading-tight mt-2">
                    “{description}”
            </p>
        </div>
    );}