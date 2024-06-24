import './Login.css';
import { useContext, useEffect, useState } from 'react';
import { socket } from '../../core/socket';
import { GameContext } from '../../core/GameContext';
import { avatars } from '../../common/Avatars';

function Login(){
    const gameContext = useContext(GameContext);
    const [validationMessage, setValidationMessage] = useState();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        /**
         * If the connection went well then send data to create the player, 
         * if not, it will not emit the creation event
         */
        function onConnect() {
            emitNewPlayer();
        }

        /**
         * Only if the connection was ok and the creation player was ok too, then we can continue
         */
        function onPlayerCreated(response){
            if (!!response){
                gameContext.setGameData(previous => {
                    return {
                        ...previous,
                        userIsConnected: true
                    } 
                });
            }
        }

        function onConnectError(error) {
            socket.disconnect();
            setShowLoader(false);
            setValidationMessage('Error connecting to the server, please try again');
            console.log('connection error: ' + error?.message);
        }
        
        socket.on('connect', onConnect);
        socket.on("connect_error", onConnectError);
        socket.on("player_created", onPlayerCreated);
        
        return () => {
            socket.off('connect', onConnect);
            socket.off("connect_error", onConnectError);
            socket.off("player_created", onPlayerCreated);
        };
    }, 
    [gameContext.gameData.userData.name, 
    gameContext.gameData.userData.avatar]);

    function connect(){
        if (!!gameContext.gameData.userData.name &&
            !!gameContext.gameData.userData.avatar){
            setValidationMessage(null);
            setShowLoader(true);
            if (!socket.connected){
                socket.connect();
            }else{
                emitNewPlayer();
            }
        }else{
            setValidationMessage('Please enter a name and select an avatar');
        }
    }
    
    function submitHandle(event){
        event.preventDefault();
        connect();
    }

    function handleChangeName(event){
        gameContext.setGameData(previous => {
            let userData = {...previous.userData};               
            userData.name = event.target.value;

            return {
                ...previous,
                userData: userData
            } 
        });
    }    
    
    function handleSelectAvatar(event){
        gameContext.setGameData(previous => {
            let userData = {...previous.userData};               
            userData.avatar = event.target.id;

            return {
                ...previous,
                userData: userData
            } 
        });
    }

    function emitNewPlayer(){
        if (!!gameContext.gameData.userData.name && 
            !!gameContext.gameData.userData.avatar){

            socket.emit('newPlayer', 
                gameContext.gameData.userData.name, 
                gameContext.gameData.userData.avatar);
        }
    }

    return (
        <div>
            <form>
                <input placeholder="type player name" name="player" value={gameContext.gameData.userData?.name} onChange={handleChangeName}></input>
                <button type="submit" onClick={submitHandle} disabled={showLoader}>Play</button>
                {!!validationMessage && <p>{validationMessage}</p>}
                <div className="grid-avatar">
                    {avatars.map((code, index) => 
                        <span key={index} onClick={handleSelectAvatar} id={code} className={gameContext.gameData.userData?.avatar === String(code) ? 'selected' : ''}>{String.fromCodePoint(code)}</span>
                    )}
                </div>
            </form>
        </div>);

}

export default Login;