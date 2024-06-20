import { useContext } from "react";
import { GameContext } from "../../core/GameContext";
import Login from "../login/Login";
import Match from "../match/Match";

function Root(){
    const gameContext = useContext(GameContext);

    if (gameContext.isConnected){
        return <Match></Match>
    }else{
        return <Login></Login>
    }
}

export default Root;