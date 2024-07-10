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

    return <div className="root-container">
            <Header showConnections={true} 
                showTitle={true} 
                showLeaveButton={true} 
                showDisconnectButton={true}>                    
            </Header>
            <div className="game-container">
                <div className='users'>
                    <User data={gameContext.gameData.userData} showScore={false} showYou={true}></User>
                    {
                    !!gameContext.gameData.partnerData && 
                        <User data={gameContext.gameData.partnerData} showScore={false}></User>
                    }
                </div>
                <div className="game-content">
                    <div className="card-content small">
                        { !!readyMessage && 
                            <div className='highlight'>
                                <p>{readyMessage}</p> 
                            </div>
                        }
                        {!hideStartButton && 
                            <>
                                <p>All set! Hit Start when you are ready to play.</p>
                                <div className="button-group">
                                    <button className='primary' onClick={handleReady}>Start</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>;
}

export default Ready;