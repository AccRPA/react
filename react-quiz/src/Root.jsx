import { useContext } from "react";
import { SocketContext } from "./SocketContext";
import Login from "./components/login/Login";
import Game from "./components/game/Game";

function Root(){
    const socketContext = useContext(SocketContext);

    if (socketContext.isConnected){
        return <Game></Game>
    }else{
        return <Login></Login>
    }
}

export default Root;