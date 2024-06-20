import './Login.css';
import { useContext, useEffect } from 'react';
import { socket } from '../../socket';
import { GameContext } from '../../GameContext';
import { avatars } from '../../Avatars';

function Login(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onConnect() {
            gameContext.setIsConnected(true);
        }
        
        socket.on('connect', onConnect);

        return () => {
            socket.off('connect', onConnect);
        };
    }, []);

    function connect(){
        socket.connect();
        socket.emit('newPlayer', 
            gameContext.userData.name, 
            gameContext.userData.avatar);
    }
    
    function submitHandle(event){
        event.preventDefault();
        connect();
    }

    function handleChangeName(event){
        gameContext.setUserData(previous => (
            {
                ...previous,
                name: event.target.value
            }
        ));
    }    
    
    function handleSelectAvatar(event){
        gameContext.setUserData(previous => (
            {
                ...previous,
                avatar: event.target.name
            }
        ));
    }

    return (
        <div>
            <form>
                <input placeholder="type player name" name="player" value={gameContext.userData.name} onChange={handleChangeName}></input>
                
                <div>
                    {avatars.map((code, index) => 
                        <span key={index} onClick={handleSelectAvatar} name={code}>{String.fromCodePoint(code)}</span>
                    )}
                </div>

                <button type="submit" onClick={submitHandle}>Play</button>
            </form>
        </div>);

}

export default Login;