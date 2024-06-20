import { useContext, useEffect } from "react";
import { GameContext } from "../../GameContext";
import { socket } from '../../socket';

function ConnectedUsers(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function handleUsersConnected(data){
            gameContext.setUsersConnected(data);
        }
    
        socket.on('users_connected', handleUsersConnected);
        
        return () => {
            socket.off('users_connected', handleUsersConnected);
        };
    }, []);

    return <div>Total users connected: {gameContext.usersConnected}</div>;
}

export default ConnectedUsers;