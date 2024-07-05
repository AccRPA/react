import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import LeaveRoom from '../leave-room/LeaveRoom';
import Score from '../score/Score';
import { socket } from '../../core/socket';

function Game(){
    const gameContext = useContext(GameContext); 
    const [result, setResult] = useState();  

    useEffect(() => {
        function onValidateAnswer({
                isValidAnswer,
                correctAnswer,
                score,
                partnerScore}){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.partnerScore = partnerScore;
                gameData.game.score = score;
                return gameData;
            });

            setResult({
                isValidAnswer,
                correctAnswer
            });

            setTimeout(() => {
                socket.emit('next_question_request');
            },2000);
        }

        function onNextQuestion(questionNumber){
            console.log(`questionNumber: ${questionNumber}`);
            setResult(null);
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.questionNumber = questionNumber;
                return gameData;
            });
        }

        socket.on('validate_answer_response', onValidateAnswer);
        socket.on('next_question_response', onNextQuestion);
        
        return () => {
            socket.off('validate_answer_response', onValidateAnswer);
            socket.off('next_question_response', onNextQuestion);
        }
    }, []);


    return <div>
            <p>Game between</p>
            <User data={gameContext.gameData.userData}></User>
            <Score score={gameContext.gameData.game.score}></Score>
            <p>and: </p>
            <User data={gameContext.gameData.partnerData}></User>
            <Score score={gameContext.gameData.game.partnerScore}></Score>

            {!!result && <p>The answer was: {result.isValidAnswer ? 'correct': 'wrong'}</p>}

            {!!gameContext.gameData?.game?.questions && <Question></Question>}

            <LeaveRoom></LeaveRoom>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;