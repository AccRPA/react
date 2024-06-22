import { useContext } from "react";
import { GameContext } from "../../core/GameContext";

function ConnectedUsers(){
    const gameContext = useContext(GameContext);

    return <div>Total users connected: {gameContext.gameData.totalUsersConnected}</div>;
}

export default ConnectedUsers;