import { useContext } from "react";
import { GameContext } from "../../core/GameContext";

function FreeUsers(){
    const gameContext = useContext(GameContext);

    return <div className="text-pale">Users free: {gameContext.gameData.totalUsersFree}</div>;
}

export default FreeUsers;