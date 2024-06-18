import { useContext, useEffect } from "react";
import { SocketContext } from "../../SocketContext";
import { socket } from '../../socket';

function ConnectedUsers(){
    const statusContext = useContext(SocketContext);

    useEffect(() => {
        function handleUsersConnected(data){
            statusContext.setUsersConnected(data);
        }
    
        socket.on('users_connected', handleUsersConnected);
        
        return () => {
            socket.off('users_connected', handleUsersConnected);
        };
    }, []);

    return <div>Total users connected: {statusContext.usersConnected}</div>;
}

export default ConnectedUsers;