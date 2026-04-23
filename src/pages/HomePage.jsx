import { useState, useEffect, useCallback } from "react";
import { FirstFace } from "../components/FirstFace";
import { SecondFace } from "../components/SecondFace";
import Icon01 from '../assets/icons/Pokedex-08.svg';
import Pikachu from '../assets/images/Pikachu.png';
import Pokeball from '../assets/images/Pokeball_02.png';

export const HomePage = () => {
    const [pokedexOn, setPokedexOn] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState("bulbasaur");
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => res.json())
        .then(data => {
            const names = data.results.map(p => p.name);
            setPokemonList(names);
        })
        .catch(err => console.error("Error al cargar lista:", err));
        }, []);

        const togglePower = useCallback(() => {
            if(pokedexOn) {
                setTimeout(() => {
                    setPokedexOn(false)
                }, 1000);
            } else {
                setPokedexOn(true)
            }
        }, [pokedexOn]);

        const nextPokemon = () => {
            if(!pokemonList.length) return;
            const currentIndex = pokemonList.indexOf(currentPokemon);
            if(currentIndex === -1) return;
            const nextIndex = (currentIndex + 1) % pokemonList.length
            setCurrentPokemon(pokemonList[nextIndex])
        }

        const prevPokemon = () => {
            if(!pokemonList.length) return;
            const currentIndex = pokemonList.indexOf(currentPokemon);
            if(currentIndex === -1) return;
            const prevIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length
            setCurrentPokemon(pokemonList[prevIndex])
        }

        const searchPokemon = (name) => {
            const lowerName = name.toLowerCase().trim();
            if(lowerName === "") return;
            if (pokemonList.includes(lowerName)) {
                setCurrentPokemon(lowerName);
                if(!pokedexOn) setPokedexOn(true);
            } else {
                alert("Pokemon no encontrado")
            }
        }

    return(
        <div className="min-h-screen flex items-center justify-center bg-[#ff9b99] relative">
            <img className="h-[808px] w-auto absolute z-0" src={Icon01} alt=''></img>
            <FirstFace
                isPokedexOn={pokedexOn}
                currentPokemon={currentPokemon}
                onPowerToggle={togglePower}
                onPrev={prevPokemon}
                onNext={nextPokemon}
            />
            <SecondFace 
                isPokedexOn={pokedexOn}
                currentPokemon={currentPokemon}
                onSearch={searchPokemon}
            />
        </div>
    );
}