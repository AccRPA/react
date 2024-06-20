import { useContext } from "react";
import { GameContext } from "../../core/GameContext";
import Login from "../login/Login";
import Game from "../game/Game";

function Root(){
    const gameContext = useContext(GameContext);

    if (gameContext.isConnected){
        return <Game></Game>
    }else{
        return <Login></Login>
    }
}

export default Root;