import { useContext } from "react";
import { GameContext } from "../../core/GameContext";
import Login from "../login/Login";
import Match from "../match/Match";
import Game from "../game/Game";
import Result from "../result/Result";

function Root(){
    const gameContext = useContext(GameContext);

    if (!gameContext.gameData.userIsConnected) {
        return <Login></Login>
    
    // the user is connected without playing
    } else if (!gameContext.gameData.userIsPlaying) {
        return <Match></Match>

    // the user is playing in a room with a partner or alone
    } else { 
        if (!gameContext.gameData.game.gameIsFinished){
            return <Game></Game>
        }else{
            return <Result></Result>
        }
    }
}

export default Root;