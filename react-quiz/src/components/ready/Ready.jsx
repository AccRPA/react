import DisconnectButton from '../disconnect-button/DisconnectButton';
import LeaveRoom from '../leave-room/LeaveRoom';
import { GameContext } from '../../core/GameContext';
import { useContext, useEffect, useState } from 'react';
import User from '../user/User';
import { socket } from '../../core/socket';

function Ready(){
    const gameContext = useContext(GameContext);
    const [readyMessage, setReadyMessage] = useState();

    useEffect(() => {
        function onPlayerIsReady(){
            setReadyMessage('Waiting for your partner to be ready');
        }

        function onPartnerIsReady(){
            setReadyMessage('Your partner is ready and waiting for you');
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

    return <div>
        {
            !!gameContext.gameData.partnerData && 
            <div>
                <p>Game ready for: </p>
                <User data={gameContext.gameData.userData}></User>
                <p>width: </p>
                <User data={gameContext.gameData.partnerData}></User>
                <div>Hit Start when you are ready</div>
                <p>{readyMessage}</p>
            </div>
        }
        {!readyMessage && <button onClick={handleReady}>Start</button>}
        <LeaveRoom></LeaveRoom>
        <DisconnectButton></DisconnectButton>
    </div>;
}

export default Ready;