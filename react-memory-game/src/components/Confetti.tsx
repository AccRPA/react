import { Options } from "canvas-confetti";
import { useContext, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Pride from "react-canvas-confetti/dist/presets/pride";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { TCanvasConfettiInstance } from "react-canvas-confetti/dist/types/normalization";
import { ConfettiType } from "../models/enum/ConfettiType.enum";
import { SettingsContext } from "../context/SettingsContext";

interface Props {
    confettiType: ConfettiType,
}

export default ({confettiType}: Props) => {
    const settingsContext = useContext(SettingsContext);
    const [prideConductor, setPrideConductor] = useState<TConductorInstance>();
    const colors: string[] = ['#FFD700', '#1d93ec', '#FF7373', '#40E0D0'];

    // Fireworks will be run until the modal is closed, so it will be mounted depending on the props
    const handleFireworksOnInit = (params: {confetti: TCanvasConfettiInstance, conductor: TConductorInstance}) => {
        params.conductor.run(
            {
                speed: 2,
                delay: 0
            }
        );
    };    

    // Since the pride will be shoot, it has to be mounted only once
    const handlePrideOnInit = (params: {confetti: TCanvasConfettiInstance, conductor: TConductorInstance}) => {
        setPrideConductor(params.conductor);
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
            particleCount: 80,
            colors: colors,
            ticks: 100
        };
    }

    if (!settingsContext.settings.showFireworks){
        return null;
    
    }else{

        if (confettiType === ConfettiType.PRIDE){
            prideConductor?.shoot();
        }
    
        return (
            settingsContext.settings.showFireworks && 
            <>
                { confettiType === ConfettiType.FIREWORKS && 
                    <Fireworks onInit={handleFireworksOnInit} decorateOptions={handleOptionsFireworks}/> 
                }
                <Pride onInit={handlePrideOnInit} decorateOptions={handleOptionsPride}></Pride>
            </>
        );    
    }    
}