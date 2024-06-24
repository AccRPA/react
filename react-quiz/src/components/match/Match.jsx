import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';

function Match(){
    const gameContext = useContext(GameContext);

    function handleFindMatch(){
        socket.emit('find_match');
    }

    return <div>
                <p>Currently there are {gameContext.gameData.totalUsersFree} users free. We'll find you a partner automatically or you can play solo.</p>
                <button onClick={handleFindMatch}>Find match</button>
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