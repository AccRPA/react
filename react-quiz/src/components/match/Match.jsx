import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import PlaySolo from '../play-solo/PlaySolo';
import FindPartner from '../find-partner/FindPartner';
import FreeUsers from '../free-users/FreeUsers';
import AppTitle from '../app-title/AppTitle';

function Match(){
    const gameContext = useContext(GameContext);
    
    socket.emit('get_total_free_players');

    return <>
            <AppTitle></AppTitle>
            <div className="card">
                { !!gameContext.gameData.game.gameFinishedReason && 
                    <div>
                        <p>{gameContext.gameData.game.gameFinishedReason}</p> 
                    </div>
                }
                <p>Now others users can request to play with you or you can find a partner or you can play solo</p> 
                <div className="button-group">
                    <FindPartner></FindPartner>
                    <PlaySolo></PlaySolo>
                </div>
            </div>
            <div className="padding top-left flex-column">
                <FreeUsers></FreeUsers>
                <ConnectedUsers></ConnectedUsers>
            </div>
            <div className="top-right">
                <DisconnectButton></DisconnectButton>
            </div>
        </>;
}

export default Match;