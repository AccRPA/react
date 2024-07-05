import { useContext, useEffect } from 'react';
import { GameContext } from '../../core/GameContext';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import LeaveRoom from '../leave-room/LeaveRoom';
import Score from '../score/Score';
import { socket } from '../../core/socket';

function Result(){
    const gameContext = useContext(GameContext);   

    useEffect(() => {
        function onGameResult(){
            console.log('displying game results');
        }

        socket.on('game_result_response', onGameResult);
        
        return () => {
            socket.off('game_result_response', onGameResult);
        };
    });

    return <div>
        <p>Game finished! Result:</p>
        <User data={gameContext.gameData.userData}></User>
        <Score score={gameContext.gameData.game.score}></Score>
        <p>and: </p>
        <User data={gameContext.gameData.partnerData}></User>
        <Score score={gameContext.gameData.game.partnerScore}></Score>

        <LeaveRoom></LeaveRoom>
        <DisconnectButton></DisconnectButton>
    </div>;
}

export default Result;