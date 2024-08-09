import { Options } from "canvas-confetti";
import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Pride from "react-canvas-confetti/dist/presets/pride";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { TCanvasConfettiInstance } from "react-canvas-confetti/dist/types/normalization";

interface Props {
    showConfetti: boolean
}

export default ({showConfetti}: Props) => {
    const [conductor, setConductor] = useState<TConductorInstance>();
    const colors: string[] = ['#FFD700', '#1d93ec', '#FF7373', '#40E0D0'];

    const handleOnInit = (params: {confetti: TCanvasConfettiInstance, conductor: TConductorInstance}) => {
        setConductor(params.conductor);
    }
    const handleOptionsFireworks = (options: Options): Options => {
        return {
            ...options,
            colors: colors
        };
    }
    const handleOptionsPride = (options: Options): Options => {
        return {
            ...options,
            particleCount: 100,
            colors: colors
        };
    }

    if (showConfetti){
        conductor?.shoot();
    }

    return (<>
        {/* <Fireworks onInit={handleOnInit} decorateOptions={handleOptionsFireworks}/> */}
        <Pride onInit={handleOnInit} decorateOptions={handleOptionsPride}></Pride>
    </>
)
}