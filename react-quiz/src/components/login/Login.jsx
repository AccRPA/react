import './Login.css';
import { useContext, useEffect } from 'react';
import { socket } from '../../core/socket';
import { GameContext } from '../../core/GameContext';
import { avatars } from '../../common/Avatars';

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
                avatar: event.target.id
            }
        ));
    }

    return (
        <div>
            <form>
                <input placeholder="type player name" name="player" value={gameContext.userData.name} onChange={handleChangeName}></input>
                <button type="submit" onClick={submitHandle}>Play</button>
                <div className="grid-avatar">
                    {avatars.map((code, index) => 
                        <span key={index} onClick={handleSelectAvatar} id={code} className={gameContext.userData.avatar === String(code) ? 'selected' : ''}>{String.fromCodePoint(code)}</span>
                    )}
                </div>
            </form>
        </div>);

}

export default Login;