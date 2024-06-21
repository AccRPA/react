import { useContext, useEffect } from "react";
import { GameContext } from "../../core/GameContext";
import { GameData } from '../../core/GameData';
import { socket } from '../../core/socket';

function DisconnectButton(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onDisconnect() {
            gameContext.setGameData(new GameData());
        }
    
        socket.on('disconnect', onDisconnect);
        
        return () => {
            socket.off('disconnect', onDisconnect);
        };
    }, []);

    const disconnect = () => {
        socket.disconnect();
    }

    return <button onClick={disconnect}>Disconnect</button>;
}

export default DisconnectButton;