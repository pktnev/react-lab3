import { Color } from "../models/model.ts";
import React from "react";
import { Link } from "react-router-dom";

interface PaletteCardProps {
    paletteName: string,
    emoji: string,
    colors: Color[]
}

const PaletteCard: React.FC<PaletteCardProps> = (props) => {
    return (
        <div
            className="w-[90%] h-full float-left bg-[#fff] flex flex-col justify-center items-center p-2 rounded-[4px] cursor-pointer">
            <Link to={`/palette?name=${props.paletteName}`} className="w-full h-full p-0 m-0">
                <div className="w-full rounded-[4px] left grid grid-cols-5">
                    {props.colors.map((item: Color) => (
                        <div
                            key={Math.random() * (1 - 100) + 1}
                            style={{ backgroundColor: item.color.toLowerCase() }}
                            className="w-full h-10 float-left">
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center justify-between text-lg font-semibold text-black">
                    <p>{props.paletteName}</p>
                    <p>{props.emoji}</p>
                </div>
            </Link>
        </div>
    )
}

export default PaletteCard;