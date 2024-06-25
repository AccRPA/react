import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';

function Match(){
    const gameContext = useContext(GameContext);
    
    socket.emit('get_total_free_players');

    if (gameContext.gameData.userIsConnected && 
        !gameContext.gameData.userIsPlaying &&
        !gameContext.gameData.game.gameFinishedReason && 
        gameContext.gameData.totalUsersFree > 0){
            socket.emit('find_match');
    }

    function onFindPartner(){
        socket.emit('find_match');
    }

    return <div>
                <p>Currently there are {gameContext.gameData.totalUsersFree} users free.</p>
                { !!gameContext.gameData.game.gameFinishedReason && 
                    <div>
                        <p>{gameContext.gameData.game.gameFinishedReason}</p> 
                        <button onClick={onFindPartner}>Find partner</button>
                    </div>
                }
                { !gameContext.gameData.game.gameFinishedReason && 
                    <p>We'll find you a partner automatically or you can play solo.</p> 
                }
                <DisconnectButton></DisconnectButton>
                <ConnectedUsers></ConnectedUsers>
            </div>;
}

export default Match;