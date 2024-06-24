import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';

function Match(){
    const gameContext = useContext(GameContext);

    if (gameContext.gameData.userIsConnected && 
        !gameContext.gameData.userIsPlaying && 
        gameContext.gameData.totalUsersFree > 0){
        socket.emit('find_match');
    }

    return <div>
                <p>Currently there are {gameContext.gameData.totalUsersFree} users free. We'll find you a partner automatically or you can play solo.</p>
                {
                    !!gameContext.gameData.partnerData && 
                    <div>
                        <p>Match for: </p>
                        <User data={gameContext.gameData.userData}></User>
                        <p>width: </p>
                        <User data={gameContext.gameData.partnerData}></User>
                    </div>
                }
                <DisconnectButton></DisconnectButton>
                <ConnectedUsers></ConnectedUsers>
            </div>;
}

export default Match;