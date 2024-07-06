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
        event.preventDefault();
        const value = event.target.value;

        gameContext.setGameData(previous => {
            return {
                ...previous,
                userData: {
                    ...previous.userData,
                    name: value
                }
            } 
        });
    }    
    
    function handleSelectAvatar(event){
        event.preventDefault();

        const idSelected = event.target.id;
        gameContext.setGameData(previous => {
            return {
                ...previous,
                userData: {
                    ...previous.userData,
                    avatar: idSelected
                }
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
        <div className="card">
            <form>
                <h1>WELCOME TO QUIZ GAME</h1>
                <h5>Enter your name and choose an avatar</h5>
                <input aria-label="player_name" 
                    placeholder="Enter name" 
                    name="player" 
                    value={gameContext.gameData.userData.name} 
                    onChange={handleChangeName}>
                </input>
                
                
                <div class="avatar-container">
                    <div aria-label="avatars" className="grid-avatar">
                        {avatars.map((code, index) => 
                            <span aria-label="player_avatar" 
                            key={index} 
                            onClick={handleSelectAvatar} 
                            id={code} 
                            className={gameContext.gameData.userData?.avatar === String(code) ? 'selected' : ''}
                            >
                                    {String.fromCodePoint(code)}
                                </span>
                        )}
                    </div>
                </div>

                <p class="validation-message" aria-label="validation_message">{validationMessage}</p>

                <button aria-label="submit" 
                    type="submit" 
                    onClick={submitHandle} 
                    className='primary'
                    disabled={showLoader}
                >
                    Play
                </button>
            </form>
        </div>);

}

export default Login;