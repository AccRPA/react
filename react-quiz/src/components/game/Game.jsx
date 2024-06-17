import { useContext, useEffect } from "react";
import { SocketContext } from "../../SocketContext";
import { socket } from '../../socket';

function Game(){
    const statusContext = useContext(SocketContext);

    useEffect(() => {
        function onDisconnect() {
            statusContext.setIsConnected(false);
        }
        
        function handleUsersConnected(data){
            console.log('users_connected');
            statusContext.setUsersConnected(data);
        }
    
        socket.on('disconnect', onDisconnect);
        socket.on('users_connected', handleUsersConnected);
        
        return () => {
            socket.off('disconnect', onDisconnect);
            socket.off('users_connected', handleUsersConnected);
        };
    }, []);

    const disconnect = () => {
        socket.disconnect();
    }

    return <div>
            <p>Game!</p>
            <div>Total users connected: {statusContext.usersConnected}</div>
            <button onClick={disconnect}>Disconnect</button>
        </div>;
}

export default Game;