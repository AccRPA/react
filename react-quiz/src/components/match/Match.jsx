import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import PlaySolo from '../play-solo/PlaySolo';
import FindPartner from '../find-partner/FindPartner';

function Match(){
    const gameContext = useContext(GameContext);
    
    socket.emit('get_total_free_players');

    return <div>
                <p>Currently there are {gameContext.gameData.totalUsersFree} users free.</p>
                { !!gameContext.gameData.game.gameFinishedReason && 
                    <div>
                        <p>{gameContext.gameData.game.gameFinishedReason}</p> 
                    </div>
                }
                <p>Now others users can request to play with you or you can find a partner or you can play solo</p> 
                <FindPartner></FindPartner>
                <PlaySolo></PlaySolo>
                <DisconnectButton></DisconnectButton>
                <ConnectedUsers></ConnectedUsers>
            </div>;
}

export default Match;