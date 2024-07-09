import { GameContext } from '../../core/GameContext';
import { useContext, useEffect, useState } from 'react';
import User from '../user/User';
import { socket } from '../../core/socket';
import Header from '../header/Header';

function Ready(){
    const gameContext = useContext(GameContext);
    const [readyMessage, setReadyMessage] = useState();
    const [hideStartButton, setHideStartButton] = useState(false);

    useEffect(() => {
        function onPlayerIsReady(){
            if (!gameContext.gameData.partnerData?.ready){
                setReadyMessage('Waiting for your partner to be ready');
            }
            setHideStartButton(true);
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.userData = {
                    ...gameData.userData, 
                    ready: true
                };
                return gameData;
            });
        }

        function onPartnerIsReady(){
            setReadyMessage('Your partner is ready and waiting for you');
            setHideStartButton(false);
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.partnerData = {
                    ...gameData.partnerData, 
                    ready: true
                };
                return gameData;
            });
        }

        socket.on('player_ready', onPlayerIsReady);
        socket.on('partner_ready', onPartnerIsReady);

        return () => {
            socket.off('player_ready', onPlayerIsReady);
            socket.off('partner_ready', onPartnerIsReady);
        }
    })
    const handleReady = () => {
        socket.emit('player_ready');
    };

    return <>
            <Header showConnections={true} 
                showTitle={true} 
                showLeaveButton={true} 
                showDisconnectButton={true}>                    
            </Header>
            <div>
                {
                    !!gameContext.gameData.partnerData && 
                    <div>
                        <p>Game ready for: </p>
                        <User data={gameContext.gameData.userData} showScore={false} showYou={true}></User>
                        <p>width: </p>
                        <User data={gameContext.gameData.partnerData} showScore={false}></User>
                        <div>Hit Start when you are ready</div>
                        <p>{readyMessage}</p>
                    </div>
                }
                {!hideStartButton && <button className='primary' onClick={handleReady}>Start</button>}
            </div>
        </>;
}

export default Ready;