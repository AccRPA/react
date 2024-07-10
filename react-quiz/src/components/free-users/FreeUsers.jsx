import { useContext } from "react";
import { GameContext } from "../../core/GameContext";

function FreeUsers(){
    const gameContext = useContext(GameContext);

    return <div className="text-pale">
            <span className="hide-xs hide-lg">Users free: </span>
            {gameContext.gameData.totalUsersFree}
        </div>;
}

export default FreeUsers;