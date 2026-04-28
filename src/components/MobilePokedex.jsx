import { SearchBar } from "./SearchBar";
import { PokemonCard } from "./card";
import { InfoContent } from "./Info";
import { Switch } from "./switch";

export const MobilePokedex = ({
    isPokedexOn,
    currentPokemon,
    onPrev,
    onNext,
    onSearch,
    onPowerToggle
}) => {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col gap-3 px-2 py-3">

            <SearchBar onSearch={onSearch} className="w-full" />

            <div className="flex h-auto w-full flex-col bg-[#ea5255] rounded-2xl rounded-br-[80px] overflow-hidden border-[#7b1716] border-2">

                <div className="flex h-[36px] w-full bg-[#ba3b3e] gap-2 justify-center">
                    <div className="w-[30px] h-[30px] bg-[#ea5255]"></div>
                    <div className="w-[335px] h-[30px] bg-[#ea5255] flex items-center pl-1">
                        < Switch onPowerToggle={onPowerToggle} />
                    </div>
                    <div className="w-[30px] h-[30px] bg-[#ea5255]"></div>
                </div>

                <div className="mx-auto flex h-[284px] w-[364px] flex-col p-2 pl-4 pr-4 bg-white rounded-br-[50px] rounded-2xl gap-2 mt-4 border-[#7b1716] border-2">
                    <div className="flex flex-col gap-1">
                        <div className="h-[3px] w-full bg-[#641a46]"></div>
                        <div className="h-[3px] w-full bg-[#3c3e74]"></div>
                    </div>
                        <div className="flex justify-start items-center gap-6 ml-2">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className={`flex h-[14px] w-[14px] rounded-full ${isPokedexOn ? "bg-[#a72f34]" : "bg-[#6f6f6f]"}`}></div>
                                <p className="text-[7px] text-black">BATTERY</p>
                            </div>
                        <div className={`flex h-[240px] w-[230px] rounded-sm flex-col items-center pt-1 pb-1 ${isPokedexOn ? "bg-[#412f2f]" : "bg-[#412f2f]"}`}>
                            <div className="mt-1 h-[160px] w-[210px] bg-[#412f2f] z-10">
                                {isPokedexOn ? (
                                    <PokemonCard pokemonName={currentPokemon} compact />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                                    </div>
                                )}
                            </div>
                            <div className="h-[75px] w-full flex flex-col z-1">
                                {isPokedexOn ? (
                                    <InfoContent pokemonName={currentPokemon} compact />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] ml-8 mr-8">
                    <div className="flex items-end gap-[2px] text-[#412f2f] italic leading-none mt-1">
                        <p className="text-[18px] font-bold not-italic">Nintendo</p>
                        <p className="text-[30px] font-normal tracking-[-0.5px]">GAME BOY</p>
                        <p className="text-[8px] font-bold not-italic mb-[4px]">TM</p>
                    </div>
                    <div className="flex justify-between mt-[30px] gap-[100px]">
                        <div>
                            <div className='relative w-[94px] h-[94px]'>
                                <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 w-[94px] h-[32px] bg-[#2d2d2d] rounded-lg flex justify-between'>
                                    <button 
                                    type='button'
                                    className='w-[42px] h-[32px] cursor-pointer text-[8px] text-white/40'
                                    onClick={onPrev}
                                    >PREV</button>
                                    <button 
                                    type='button'
                                    className='w-[42px] h-[32px] cursor-pointer text-[8px] text-white/40'
                                    onClick={onNext}
                                    >NEXT</button>
                                </div>
                                <div className='absolute inset-y-0 left-1/2 -translate-x-1/2 w-[32px] h-[94px] bg-[#2d2d2d] rounded-lg flex flex-col justify-between'>
                                    <button type='button'
                                    className='w-[35px] h-[42px] cursor-pointer'></button>
                                    <button type='button'
                                    className='w-[35px] h-[42px] cursor-pointer'></button>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-auto w-[120px]">
                            <div className="absolute left-[-10px] top-[-7px] h-[64px] w-[132px] rounded-full bg-[#7b1716]/30 rotate-[-32deg]"></div>
                            <div className="absolute left-0 top-0 flex items-start gap-2 rotate-[-25deg]">
                                <div className="flex flex-col items-center">
                                    <div className='w-[58px] h-[58px] rounded-full border-[#7b1716] border-[2px] flex items-center justify-center'>
                                        <button className='w-[46px] h-[46px] cursor-pointer rounded-full bg-[#7b1716]'>
                                        </button>
                                    </div>
                                    <p className='mt-1 text-[14px] font-bold leading-none text-[#7b1716]'>B</p>
                                </div>
                                
                                <div className="mt-[-8px] flex flex-col items-center">
                                    <div className='w-[58px] h-[58px] rounded-full border-[#7b1716] border-[2px] flex items-center justify-center'>
                                        <button className='w-[46px] h-[46px] cursor-pointer rounded-full bg-[#7b1716]'>
                                        </button>
                                    </div>
                                    <p className='mt-1 text-[14px] font-bold leading-none text-[#7b1716]'>A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[10px] flex items-center justify-center'>
                        <div className="relative h-auto w-[120px]">
                            <div className="absolute left-[-10px] top-[-4px] h-[64px] w-[130px] rounded-full bg-[#ba3b3e]/10 rotate-[-30deg]"></div>
                            <div className="absolute left-0 top-0 flex items-start gap-2 rotate-[-25deg]">
                                <div className="flex flex-col items-center">
                                    <div className='w-[54px] h-[22px] rounded-full border-[#7b1716] border-[2px] flex items-center justify-center'>
                                        <button className='w-[48px] h-[16px] cursor-pointer rounded-full bg-[#d0d0cf]'>
                                        </button>
                                    </div>
                                    <p className='mt-1 text-[14px] font-bold leading-none text-[#7b1716]'>Select</p>
                                </div>
                                
                                <div className="mt-[16px] flex flex-col items-center">
                                    <div className='w-[54px] h-[22px] rounded-full border-[#7b1716] border-[2px] flex items-center justify-center'>
                                        <button className='w-[48px] h-[16px] cursor-pointer rounded-full bg-[#d0d0cf]'>
                                        </button>
                                    </div>
                                    <p className='mt-1 text-[14px] font-bold leading-none text-[#7b1716]'>Select</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-center mb-2">
                        <div className="flex gap-3 absolute rotate-[-30deg] right-0 mr-8 bottom-[50px]">
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                            <div className="w-[8px] h-[65px] bg-[#ba3b3e] rounded-full"></div>
                        </div>
                        <div className="w-[60px] h-[15px] bg-[#ba3b3e] rounded-full mt-[85px]"></div>
                    </div>
                </div>
            </div>

        </div>

    );
};
