import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-full max-w-screen-lg flex justify-between items-center h-[105px] float-left top-0 fixed">
            <h1 className="font-extrabold text-white text-2xl cursor-pointer">
                <Link to="/">FLAT UI COLORS 2</Link>
            </h1>
            <div className="flex justify-between items-center text-white font-semibold text-lg">
                <p className="mr-4 cursor-not-allowed hover:text-gray-400">Designer Inspiration <span
                    className="rounded-[5px] bg-red-600 py-1 px-2 text-sm"> NEW </span></p>
                <p className="cursor-not-allowed hover:text-gray-400">Subscribe</p>
            </div>
        </header>
    );
}