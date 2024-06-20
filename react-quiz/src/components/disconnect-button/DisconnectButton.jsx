import { useContext, useEffect } from "react";
import { GameContext } from "../../core/GameContext";
import { socket } from '../../core/socket';

function DisconnectButton(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onDisconnect() {
            gameContext.setIsConnected(false);
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