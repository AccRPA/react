import { useContext } from "react";
import { GameContext } from "./GameContext";
import Login from "./components/login/Login";
import Game from "./components/game/Game";

function Root(){
    const gameContext = useContext(GameContext);

    if (gameContext.isConnected){
        return <Game></Game>
    }else{
        return <Login></Login>
    }
}

export default Root;