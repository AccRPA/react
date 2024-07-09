import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import { socket } from '../../core/socket';
import PlaySolo from '../play-solo/PlaySolo';
import FindPartner from '../find-partner/FindPartner';
import Header from '../header/Header';
import User from '../user/User';

function Match(){
    const gameContext = useContext(GameContext);
    
    socket.emit('get_total_free_players');

    return <>
            <Header showConnections={true} 
                showTitle={true} 
                showLeaveButton={false} 
                showDisconnectButton={true}>                    
            </Header>

            <User data={gameContext.gameData.userData} showScore={false} showYou={true}></User>
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
        </>;
}

export default Match;