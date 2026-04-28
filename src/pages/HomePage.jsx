import { useState, useEffect, useCallback } from "react";
import { FirstFace } from "../components/FirstFace";
import { SecondFace } from "../components/SecondFace";
import { MobilePokedex } from "../components/MobilePokedex";
import Icon01 from '../assets/icons/Pokedex-08.svg';

export const HomePage = () => {
    const [pokedexOn, setPokedexOn] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState("bulbasaur");
    const [pokemonList, setPokemonList] = useState([]);
    const [viewport, setViewport] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1440,
        height: typeof window !== "undefined" ? window.innerHeight : 900,
    });

    const desktopBaseWidth = 1020;
    const desktopBaseHeight = 820;
    const mobileBaseWidth = 420;
    const mobileBaseHeight = 800;
    const mobileBreakpoint = 700;
    const shellPadding = viewport.width < 640 ? 16 : 32;
    const isMobileLayout = viewport.width < mobileBreakpoint;
    const desktopScale = Math.min(
        (viewport.width - shellPadding * 2) / desktopBaseWidth,
        (viewport.height - shellPadding * 2) / desktopBaseHeight,
        1
    );
    const mobileScale = Math.min(
        (viewport.width - 8) / mobileBaseWidth,
        1
    );

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => res.json())
        .then(data => {
            const names = data.results.map(p => p.name);
            setPokemonList(names);
        })
        .catch(err => console.error("Error al cargar lista:", err));
        }, []);

        useEffect(() => {
            const handleResize = () => {
                setViewport({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            handleResize();
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
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
        <div className="min-h-screen bg-[#ff9b99] relative overflow-x-hidden">
            {isMobileLayout ? (
                <div className="flex w-full justify-center overflow-x-hidden py-2">
                    <div
                        className="relative"
                        style={{
                            width: `${mobileBaseWidth * mobileScale}px`,
                            height: `${mobileBaseHeight * mobileScale}px`,
                        }}
                    >
                        <div
                            className="absolute left-1/2 top-0"
                            style={{
                                width: `${mobileBaseWidth}px`,
                                height: `${mobileBaseHeight}px`,
                                transform: `translateX(-50%) scale(${mobileScale})`,
                                transformOrigin: "top center",
                            }}
                        >
                            <MobilePokedex
                                isPokedexOn={pokedexOn}
                                currentPokemon={currentPokemon}
                                onPowerToggle={togglePower}
                                onPrev={prevPokemon}
                                onNext={nextPokemon}
                                onSearch={searchPokemon}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex min-h-screen items-center justify-center p-8">
                    <div
                        className="relative"
                        style={{
                            width: `${desktopBaseWidth * desktopScale}px`,
                            height: `${desktopBaseHeight * desktopScale}px`,
                        }}
                    >
                        <div
                            className="absolute left-1/2 top-0"
                            style={{
                                width: `${desktopBaseWidth}px`,
                                height: `${desktopBaseHeight}px`,
                                transform: `translateX(-50%) scale(${desktopScale})`,
                                transformOrigin: "top center",
                            }}
                        >
                            <img className="h-[808px] w-auto absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2" src={Icon01} alt=''></img>
                            <div className="relative z-10 flex h-full items-center justify-center">
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
