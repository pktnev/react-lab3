import { useState } from "react";
import { IPalette, PaletteFields } from "../models/model";
import palette from "../asts/palette.json";
import PaletteCard from "../compn/PaletteCard";
import { Header } from "../compn/Header";

export function Main() {
    const [paletteJson] = useState<IPalette>(palette);

    return (
        <div className="bg-body-bg-color bg-body-bg-img w-screen h-screen flex flex-col items-center justify-center">
            <Header />
            <div className="grid grid-cols-3 gap-4 place-items-center w-full max-w-screen-lg">
                {paletteJson.map((item: PaletteFields) => (
                    <PaletteCard
                        key={item.id}
                        paletteName={item.paletteName}
                        emoji={item.emoji}
                        colors={item.colors}
                    />
                ))}
            </div>
        </div>
    );
}