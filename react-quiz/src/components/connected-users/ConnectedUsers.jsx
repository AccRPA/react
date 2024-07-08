import { useContext } from "react";
import { GameContext } from "../../core/GameContext";

function ConnectedUsers(){
    const gameContext = useContext(GameContext);

    return <div className="text-pale">Users connected: {gameContext.gameData.totalUsersConnected}</div>;
}

export default ConnectedUsers;