import './Login.css';
import { useContext, useEffect } from 'react';
import { socket } from '../../core/socket';
import { GameContext } from '../../core/GameContext';
import { avatars } from '../../common/Avatars';

function Login(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onConnect() {
            gameContext.setGameData(previous => {
                return {
                    ...previous,
                    userIsConnected: true
                } 
            });
        }
        
        socket.on('connect', onConnect);

        return () => {
            socket.off('connect', onConnect);
        };
    }, []);

    function connect(){
        socket.connect();
        socket.emit('newPlayer', 
            gameContext.gameData.userData.name, 
            gameContext.gameData.userData.avatar);
    }
    
    function submitHandle(event){
        event.preventDefault();
        connect();
    }

    function handleChangeName(event){
        gameContext.setGameData(previous => {
            let userData = getUserData(previous);                
            userData.name = event.target.value;

            return {
                ...previous,
                userData: userData
            } 
        });
    }    
    
    function handleSelectAvatar(event){
        gameContext.setGameData(previous => {
            let userData = getUserData(previous);                
            userData.avatar = event.target.id;

            return {
                ...previous,
                userData: userData
            } 
        });
    }

    function getUserData(previous){
        let userData = {...previous.userData};
        if (!userData){
            userData = new Player();
        }

        return userData;
    }

    return (
        <div>
            <form>
                <input placeholder="type player name" name="player" value={gameContext.gameData.userData?.name} onChange={handleChangeName}></input>
                <button type="submit" onClick={submitHandle}>Play</button>
                <div className="grid-avatar">
                    {avatars.map((code, index) => 
                        <span key={index} onClick={handleSelectAvatar} id={code} className={gameContext.gameData.userData?.avatar === String(code) ? 'selected' : ''}>{String.fromCodePoint(code)}</span>
                    )}
                </div>
            </form>
        </div>);

}

export default Login;