import { useState } from 'react';
import Search from '../assets/icons/busqueda.svg';

export const SearchBar = ({ onSearch, className = "" }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input)
    }

    return(
        <form onSubmit={handleSubmit} className={`h-[60px] w-[430px] flex border-4 border-[#971e1e] rounded-lg overflow-hidden items-center justify-center ${className}`}>
            <button 
            className='w-[60px] h-[60px] flex items-center justify-center border-[#ba3b3e] bg-[#ba3b3e] cursor-pointer'>
                <img 
                className="w-[30px] h-auto" 
                src={Search} 
                alt=''></img>
            </button>
            <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pokemon" 
            className="text-[#971e1e] text-[18px] font-bold border-[#ba3b3e] pl-4 focus:outline-none h-auto w-full "
            />
        </form>
    );
}
