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
                
                <span>&#129311;</span>
                <span>&#129305;</span>
                <span>&#129304;</span>
                <span>&#128074;</span>
                <span>&#128164;</span>
                <span>&#128169;</span>
                <span>&#128139;</span>
                <span>&#128158;</span>
                <span>&#128151;</span>
                <span>&#128150;</span>
                <span>&#128124;</span>
                <span>&#127965;</span>
                <span>&#127958;</span>
                <span>&#127984;</span>
                <span>&#127755;</span>
                <span>&#128509;</span>
                <span>&#128511;</span>
                <span>&#128736;</span>
                <span>&#128737;</span>
                <span>&#128722;</span>
                <span>&#128680;</span>
                <span>&#128640;</span>
                <span>&#127814;</span>
                <span>&#127820;</span>
                <span>&#127827;</span>
                <span>&#127825;</span>
                <span>&#127812;</span>
                <span>&#127804;</span>
                <span>&#127800;</span>
                <span>&#128516;</span>
                <span>&#128512;</span>
                <span>&#128513;</span>
                <span>&#128540;</span>
                <span>&#128515;</span>
                <span>&#128520;</span>
                <span>&#128519;</span>
                <span>&#128526;</span>
                <span>&#128536;</span>
                <span>&#128567;</span>
                <span>&#129299;</span>
                <span>&#129312;</span>
                <span>&#129322;</span>
                <span>&#129396;</span>
                <span>&#129488;</span>
                <span>&#128128;</span>
                <span>&#128123;</span>
                <span>&#128125;</span>
                <span>&#128126;</span>
                <span>&#129302;</span>
                <span>&#129313;</span>
                <span>&#129498;</span>
                <span>&#128025;</span>
                <span>&#128037;</span>
                <span>&#128045;</span>
                <span>&#128046;</span>
                <span>&#128047;</span>
                <span>&#128048;</span>
                <span>&#128049;</span>
                <span>&#129412;</span>
                <span>&#128035;</span>
                <span>&#128034;</span>
                <span>&#128050;</span>
                <span>&#128052;</span>
                <span>&#128053;</span>
                <span>&#128054;</span>
                <span>&#128055;</span>
                <span>&#128057;</span>
                <span>&#128059;</span>
                <span>&#128060;</span>
                <span>&#129409;</span>
                <span>&#129418;</span>
                <span>&#127773;</span>
                <span>&#127774;</span>
                <span>&#127770;</span>
                <span>&#127877;</span>
                
                <button type="submit" onClick={submitHandle}>Play</button>
            </form>
        </div>);

}

export default Login;