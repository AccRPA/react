import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { TCanvasConfettiInstance } from "react-canvas-confetti/dist/types/normalization";

interface Props {
    showConfetti: boolean
}

export default ({showConfetti}: Props) => {
    const [conductor, setConductor] = useState<TConductorInstance>();

    const handleOnInit = (params: {confetti: TCanvasConfettiInstance, conductor: TConductorInstance}) => {
        setConductor(params.conductor);
    }

    if (showConfetti){
        conductor?.shoot();
    }

    return (<>
        <Fireworks onInit={handleOnInit}/>
    </>
)
}