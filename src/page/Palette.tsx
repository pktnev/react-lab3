import {useSearchParams} from "react-router-dom";
import palette from "../asts/palette.json";
import {useEffect, useState} from "react";
import {Color, IPalette, PaletteFields} from "../models/model";
import {PaletteHeader} from "../compn/PaletteHeader";

export function Palette() {
    const [searchParams] = useSearchParams();
    const [audio] = useState(new Audio("src/asts/src_notify.wav"));
    const [paletteJson] = useState<IPalette>(palette.filter(p => p.paletteName === searchParams.get('name')));
    const [copyText, setCopyText] = useState<string>('Copy');
    const [isCopied, setIsCopied] = useState<boolean>(false);
    useEffect(() => {
        if (isCopied) {
            setCopyText('Copied!');
            setTimeout(() => {
                setIsCopied(false);
                setCopyText('Copy');
            }, 400)
        }
    }, [isCopied]);
    return (
        <>
            <PaletteHeader/>
            <div className="w-full h-screen grid grid-cols-5">
                {paletteJson.map((item: PaletteFields) => (
                    item.colors.map((item: Color) => (
                        <div key={Math.random() * (1 - 100) + 1}
                             style={{backgroundColor: item.color.toLowerCase()}}
                             className="relative w-full h-full float-left flex flex-col items-center justify-center cursor-pointer group"
                             onClick={() => {
                                 navigator.clipboard.writeText(item.color.toLowerCase());
                                 setIsCopied(true);
                                 audio.play();
                             }}
                        >
                            <p className="hidden text-white text-xl rounded-[5px] border-2 border-white group-hover:block py-1 px-2">{copyText}</p>
                            <p className="font-bold mr-4 mb-1 text-white absolute bottom-0 right-0">{item.name}</p>
                        </div>
                    ))
                ))}
            </div>
        </>
    );
}