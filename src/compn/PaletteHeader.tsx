
import { Link } from "react-router-dom";

export function PaletteHeader() {
    return (
        <header className="w-full top-0 fixed bg-white flex justify-between items-center h-[50px] px-5 m-0 z-20">
            <p className="text-black font-semibold text-lg cursor-pointer hover:font-bold">
                <Link to="/" className="w-0 h-0 m-0 p-0"><span>←</span> Back</Link>
            </p>
            <p className="text-bold text-white rounded-[5px] bg-black py-2 px-4">Copy Format: HEX</p>
            <p className="text-black font-semibold text-lg cursor-not-allowed hover:text-gray-400">Sound on 🔊</p>
        </header>
    );
}
