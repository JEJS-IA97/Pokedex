import Icon01 from '../assets/icons/Pokedex-06.svg';
import Icon02 from '../assets/icons/Pokedex-07.svg';
import { SearchBar } from "../components/SearchBar";
import { InfoContent } from "../components/Info";

export const SecondFace = ({ isPokedexOn, currentPokemon, onSearch }) => {

    return(
        <div className="flex flex-col items-center justify-center relative">
            <div className="absolute top-0 z-10 right-0">
                <SearchBar onSearch={onSearch} />
            </div>
            <div className="h-[800px] w-[450px] flex items-center justify-center">
                <div className="h-[800px] w-[450px] flex items-center justify-end relative flex-col">
                    <img className="w-[450px] absolute z-0 bottom-0" src={Icon01} alt=''></img>
                    <img className="w-[420px] absolute z-1 bottom-0 mb-4" src={Icon02} alt=''></img>
                    <div className="h-auto w-[320px] flex flex-col z-1 mb-20">
                        <div className="h-[110px] w-auto flex flex-col z-1 bg-[#412f2f] rounded-lg mb-[35px]">
                            {isPokedexOn ? (
                                <InfoContent pokemonName={currentPokemon} />
                            ) : (
                            <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">

                            </div>
                        )}
                        </div>
                        <div className="h-auto w-auto flex flex-col mb-[20px] gap-3">
                            <div className='grid grid-cols-5 gap-[1px]'>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                                <div className='h-[60px] w-auto bg-[#639cd4] rounded-sm shadow-inner shadow-[#3985b2] cursor-pointer'></div>
                            </div>
                            <div className="flex gap-2 justify-end">
                                <div className="h-[10px] w-[50px] bg-[#412f2f] rounded-lg"></div>
                                <div className="h-[10px] w-[50px] bg-[#412f2f] rounded-lg"></div>
                            </div>
                        </div>
                        <div className="h-auto w-auto flex justify-between z-1 items-center mb-[45px]">                 
                                <div className="h-[55px] w-[135px] bg-white rounded-lg flex items-center justify-center border border-[#971e1e]">
                                    <div className="h-[55px] w-[2px] bg-[#971e1e]"></div>
                            </div>
                            <button 
                            type='button'
                            className="h-[35px] w-[35px] bg-[#f3e954] shadow-inner shadow-[#d18c46] rounded-full cursor-pointer"
                            >i</button>
                        </div>
                        <div className="h-auto w-auto flex justify-between z-1">
                            <div className="h-[55px] w-[135px] bg-[#412f2f] rounded-lg"></div>
                            <div className="h-[55px] w-[135px] bg-[#412f2f] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}