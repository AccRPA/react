import './Login.css';
import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { socket } from '../../socket';
import { SocketContext } from '../../SocketContext';
import { useState } from 'react';

function Login(){
    const statusContext = useContext(SocketContext);
    const [name, setName] = useState('');

    useEffect(() => {
        function onConnect() {
            statusContext.setIsConnected(true);
        }
        
        socket.on('connect', onConnect);

        return () => {
            socket.off('connect', onConnect);
        };
    }, []);

    function connect(){
        socket.connect();
        socket.emit('newPlayer', uuidv4(), name, 'avatar');
    }
    
    function submitHandle(event){
        event.preventDefault();
        connect();
    }

    function handleChangeName(event){
        setName(event.target.value);
    }

    return (
        <div>
            <form action="/match">
                <input placeholder="type player name" value={name} onChange={handleChangeName}></input>
                <button type="submit" onClick={submitHandle}>Play</button>
            </form>
        </div>);

}

export default Login;