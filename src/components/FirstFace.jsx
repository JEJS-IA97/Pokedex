import Icon01 from '../assets/icons/Pokedex-02.svg';
import Icon02 from '../assets/icons/Pokedex-03.svg';
import Icon03 from '../assets/icons/Pokedex-04.svg';
import Icon04 from '../assets/icons/Pokedex-05.svg';
import { PokemonCard } from "../components/card";

export const FirstFace = ({ isPokedexOn, currentPokemon, onPowerToggle, onPrev, onNext }) => {

    return(
        <div className="h-[800px] w-[510px] flex items-center justify-center">
            <div className="h-[800px] w-[450px] flex items-center justify-end relative flex-col">
                <img className="w-[450px] absolute z-0 bottom-0" src={Icon01} alt=''></img>
                <img className="w-[450px] absolute z-0 bottom-0" src={Icon01} alt=''></img>
                <img className="w-[420px] absolute z-1 bottom-0 mb-4" src={Icon02} alt=''></img>
                <img className="w-[450px] absolute z-2 top-0" src={Icon03} alt=''></img>
                <div className="w-[100px] h-[100px] absolute z-3 top-11 left-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-[85px] h-[85px] bg-[#639cd4] rounded-full shadow-inner shadow-[#6284a9]"></div>
                </div>
                <div className="w-auto h-auto absolute z-3 top-4 left-37 flex items-center justify-center gap-3">
                    <div className="w-[20px] h-[20px] bg-[#a72f34] shadow-inner shadow-[#7b1716]  rounded-full"></div>
                    <div className="w-[20px] h-[20px] bg-[#f3e954] shadow-inner shadow-[#d18c46] rounded-full"></div>
                    <div className="w-[20px] h-[20px] bg-[#60b773] rounded-full shadow-inner shadow-[#6a9d5d] rounded-full"></div>
                </div>
                <div className="h-[355px] w-[355px] rounded-xl flex flex-col z-10 items-center relative">
                    <img className="w-[355px] z-0 absolute" src={Icon04} alt=''></img>
                    <div className="flex items-center justify-center p-3 gap-3 z-10">
                        <div className="h-[25px] w-[25px] rounded-full bg-[#ea5255]"></div>
                        <div className="h-[25px] w-[25px] rounded-full bg-[#ea5255]"></div>
                    </div>
                    <div className="h-[240px] w-[310px] bg-[#412f2f] rounded-xl z-10">
                        {isPokedexOn ? (
                            <PokemonCard pokemonName={currentPokemon} />
                        ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">

                        </div>
                    )}
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mt-3 z-10 pr-[37px] pl-[37px]">
                        <div className="h-[35px] w-[35px] rounded-full bg-[#ea5255] ml-5"></div>
                        <div className="flex flex-col gap-1 mr-[-15px]">
                            <div className="h-[5px] w-[75px] rounded-full bg-[#d0d0cf]"></div>
                            <div className="h-[5px] w-[75px] rounded-full bg-[#d0d0cf]"></div>
                            <div className="h-[5px] w-[75px] rounded-full bg-[#d0d0cf]"></div>
                            <div className="h-[5px] w-[75px] rounded-full bg-[#d0d0cf]"></div>
                            <div className="h-[5px] w-[75px] rounded-full bg-[#d0d0cf]"></div>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[375px] flex flex-col pl-[5px] z-10  mb-10">
                    <div className="h-auto flex items-center gap-3">
                        <button 
                        type='button'
                        className='w-[55px] h-[55px] bg-[#51504e] rounded-full shadow-sm shadow-[#3f3634] border  border-[#3f3634] cursor-pointer'
                        onClick={onPowerToggle}
                        ></button>
                        <div className='w-[70px] h-[20px] bg-[#a72f34] rounded-full border border-[#7b1716] border-[2px]'></div>
                        <div className='w-[70px] h-[20px] bg-[#639cd4] rounded-full border border-[#3d283a] border-[2px]'></div>
                    </div>
                    <div className="h-auto flex gap-6 items-end">
                        <div className="h-auto flex gap-3 justify-center items-start">
                            <div className='flex gap-5 ml-2'>
                            <div className='w-[10px] h-[10px] bg-[#2d2d2d] rounded-full'></div>
                            <div className='w-[10px] h-[10px] bg-[#2d2d2d] rounded-full'></div>
                            </div>
                        <div className='w-[150px] h-[80px] bg-[#6ba76f] rounded-lg shadow-inner shadow-[#61825e]'></div>
                        </div>
                        <div className='relative w-[120px] h-[120px]'>
                            <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 w-[120px] h-[35px] bg-[#51504e] rounded-lg flex justify-between'>
                                <button 
                                type='button'
                                className='w-[42px] h-[35px] cursor-pointer'
                                onClick={onPrev}
                                ></button>
                                <button 
                                type='button'
                                className='w-[42px] h-[35px] cursor-pointer'
                                onClick={onNext}
                                ></button>
                            </div>
                            <div className='absolute inset-y-0 left-1/2 -translate-x-1/2 w-[35px] h-[120px] bg-[#51504e] rounded-lg flex flex-col justify-between'>
                            <button type='button'
                                className='w-[35px] h-[42px] cursor-pointer'></button>
                                <button type='button'
                                className='w-[35px] h-[42px] cursor-pointer'></button>
                                </div>
                        </div>
                    </div>
                    <div className='flex gap-1 ml-2 items-center justify-end mr-15 mt-2'>
                            <div className='w-[10px] h-[10px] bg-[#2d2d2d] rounded-full'></div>
                            <div className='w-[10px] h-[5px] bg-[#2d2d2d] rounded-full'></div>
                            <div className='w-[5px] h-[5px] bg-[#2d2d2d] rounded-full'></div>
                            <div className='w-[10px] h-[5px] bg-[#2d2d2d] rounded-full'></div>
                    </div>
                </div>
            </div>
                <div className="h-[800px] w-[60px] bg-[#ea5153] flex flex-col relative">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#971e1e] mt-[150px]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#971e1e] mb-[75px]"></div>
            </div>
        </div>
    );
}