import User from '../user/User';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import { socket } from '../../core/socket';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import { EmojiFrown, EmojiSmile } from 'react-bootstrap-icons';

function Game(){
    const gameContext = useContext(GameContext); 
    const [result, setResult] = useState();
    const [waiting, setWaiting] = useState();

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

            setWaiting(false);
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


    function handleWaiting(value){
        setWaiting(value);
    }
    
    return <div className="root-container">
            <Header showConnections={false} 
                showTitle={true} 
                showLeaveButton={true} 
                showDisconnectButton={true}>                    
            </Header>

            <div className="game-container">
                <div className='users'>
                    <div>
                        <User 
                            data={gameContext.gameData.userData} 
                            score={gameContext.gameData.game.score} 
                            showScore={true} 
                            showYou={true}>
                        </User>
                    </div>
                    
                    <div>
                        {!!gameContext.gameData.partnerData && 
                            <User 
                                data={gameContext.gameData.partnerData} 
                                score={gameContext.gameData.game.partnerScore} 
                                showScore={true} 
                                switchOrder={true}>
                            </User>
                        }
                    </div>
                </div>
                {!!waiting && !result && 
                    <Modal showBackdrop={false}>
                        <div className='card-content'>
                            <div className='question-container'>Waiting for partner to answer</div>
                        </div>
                    </Modal>
                }
                {!!result && 
                    <Modal showBackdrop={true}>
                        <div className='card-content'>
                            <div className='highlight'>{result.isValidAnswer ? 'Correct': 'Wrong'}</div>
                            <div>{result.isValidAnswer ? 
                                <EmojiSmile className='correct'></EmojiSmile> : 
                                <EmojiFrown className='wrong'></EmojiFrown> }
                            </div>
                        </div>
                    </Modal>
                }
                
                <div className="game-content">
                    {!!gameContext.gameData?.game?.questions && <Question waiting={handleWaiting}></Question>}
                </div>
            </div>
        </div>;    
}

export default Game;