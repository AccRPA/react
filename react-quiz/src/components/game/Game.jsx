
import './Game.css';
import User from '../user/User';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import { socket } from '../../core/socket';
import Header from '../header/Header';

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


    return <>
            <Header showConnections={false} 
                showTitle={true} 
                showLeaveButton={true} 
                showDisconnectButton={true}>                    
            </Header>
            <div className="game-container">
                <div className='users'>
                    <div>
                        <User data={gameContext.gameData.userData} showScore={true}></User>
                    </div>
                    
                    <div>
                        {!!gameContext.gameData.partnerData && 
                            <User data={gameContext.gameData.partnerData} showScore={true} switchOrder={true}></User>
                        }
                    </div>
                </div>

                {!!result && <p>The answer was: {result.isValidAnswer ? 'correct': 'wrong'}</p>}
                
                {!!gameContext.gameData?.game?.questions && <Question></Question>}

            </div>
        </>;    
}

export default Game;