import { useContext, useEffect } from "react";
import { SocketContext } from "../../SocketContext";
import { socket } from '../../socket';

function DisconnectButton(){
    const statusContext = useContext(SocketContext);

    useEffect(() => {
        function onDisconnect() {
            statusContext.setIsConnected(false);
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