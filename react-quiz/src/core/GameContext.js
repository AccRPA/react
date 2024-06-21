import { createContext } from "react";
import { GameData } from './GameData';

export const GameContext = createContext({
    gameData: new GameData(),
    setGameData: () => {}
});