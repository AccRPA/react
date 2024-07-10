import { useContext } from "react";
import { GameContext } from "../../core/GameContext";

function ConnectedUsers(){
    const gameContext = useContext(GameContext);

    return <div className="text-pale">
            <span className="hide-xs hide-lg">Users connected: </span>
            {gameContext.gameData.totalUsersConnected}
        </div>;
}

export default ConnectedUsers;