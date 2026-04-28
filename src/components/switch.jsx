import { useState } from "react";

export const Switch = ({ onPowerToggle }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive((prev) => !prev);
        onPowerToggle?.();
    };

    return (
        <button
        type="button"
        onClick={handleClick}
        className="relative w-[80px] h-[24px]"
        >
        <div className="absolute inset-0 flex items-center justify-between rounded-full bg-[#ba3b3e] px-2 text-[8px] font-bold text-black/60">
            <p className="flex ml-[-3px]">OFF</p>
            <p className="flex mr-[-3px]">ON</p>
        </div>

        <div
            className={`absolute top-[2px] left-[2px] h-[20px] w-[20px] rounded-full bg-[#971e1e]/70 transition-transform duration-300 ${
            active ? "translate-x-[56px]" : "translate-x-0"
            }`}
        />
        </button>
    );
};
