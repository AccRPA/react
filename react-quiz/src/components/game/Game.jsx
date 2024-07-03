import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import LeaveRoom from '../leave-room/LeaveRoom';
import Score from '../score/Score';
import { socket } from '../../core/socket';

function Game(){
    const gameContext = useContext(GameContext);   

    useEffect(() => {
        function onUpdateGame({
                questionNumber,
                playerScore,
                partnerScore}){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.partnerScore = partnerScore;
                gameData.game.score = playerScore;
                gameData.game.questionNumber = questionNumber;
                return gameData;
            });
        }

        socket.on('game_update', onUpdateGame);

        return () => {
            socket.off('game_update', onUpdateGame);
        }
    }, []);


    return <div>
            <p>Game between</p>
            <User data={gameContext.gameData.userData}></User>
            <Score score={gameContext.gameData.game.score}></Score>
            <p>and: </p>
            <User data={gameContext.gameData.partnerData}></User>
            <Score score={gameContext.gameData.game.partnerScore}></Score>

            {!!gameContext.gameData?.game?.questions && <Question></Question>}

            <LeaveRoom></LeaveRoom>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;