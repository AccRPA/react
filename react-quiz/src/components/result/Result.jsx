import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import User from '../user/User';
import { socket } from '../../core/socket';
import Header from '../header/Header';
import { Utils } from '../../common/Utils';
import { EmojiFrown, EmojiGrin, EmojiSmile, EmojiSunglasses, EmojiTear } from 'react-bootstrap-icons';

function Result(){
    const gameContext = useContext(GameContext);
    const [gameResult, setGameResult] = useState({});
    const [page, setPage] = useState(0);
    const result = 
        !gameContext.gameData.partnerData ?
        0 :
        gameContext.gameData.game.score - gameContext.gameData.game.partnerScore;

    useEffect(() => {
        function onGameResult({questions, answers, partnerAnswers}){
            setGameResult({
                questions,
                answers,
                partnerAnswers
            })
        }

        socket.on('game_result_response', onGameResult);
        
        return () => {
            socket.off('game_result_response', onGameResult);
        };
    });

    function decreasePage(){
        if (page > 0){
            setPage(previous => --previous);
        }
    }
    
    function increasePage(){
        if (page < gameResult?.questions?.length - 1){
            setPage(previous => ++previous);
        }
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

                <div className="game-content">
                    <div className='card-content'>
                        <span className="highlight result-highlight">
                            <span>Game finished!</span>                        
                            {result > 0 && 
                            <span className='result-highlight'>
                                <span>You've won!</span>
                                <EmojiGrin></EmojiGrin>
                            </span> 
                            }
                            {result < 0 && 
                            <span className='result-highlight'>
                                <span>You've lost</span>
                                <EmojiTear></EmojiTear>
                            </span> 
                            }
                            {!!gameContext.gameData.partnerData && result == 0 && 
                            <span className='result-highlight'>
                                <span>It's a tie</span>
                                <EmojiSunglasses></EmojiSunglasses>
                            </span> 
                            }
                        </span>
                        {!!gameResult?.questions && 
                            <div className='question-container'>
                                <div className='question-info'>
                                    <p>Question {gameResult.questions[page].number}/{gameResult.questions.length}</p>
                                    <p>{Utils.decodeHtmlCharacters(gameResult.questions[page].category)}</p>
                                </div>
                                <p className='question'>
                                    {Utils.decodeHtmlCharacters(gameResult.questions[page].question)}
                                </p>
                                <div className='result-container'>
                                    {!!gameResult?.answers && 
                                        <div className='result-item'>
                                            <div>{gameContext.gameData.userData.name}(You)</div> 
                                            <div className='result-player'>
                                                {Utils.decodeHtmlCharacters(gameResult.answers[page].answer) || '-' } 
                                                {gameResult.answers[page].valid ? 
                                                    <EmojiSmile className='correct'></EmojiSmile> : 
                                                    <EmojiFrown className='wrong'></EmojiFrown> }
                                            </div>      
                                        </div>
                                    }
                                    <div className='result-item'>
                                        <div className='result-answer'>Answer</div>
                                        <div>
                                            {Utils.decodeHtmlCharacters(gameResult.questions[page].correctAnswer)}
                                        </div>
                                    </div>
                                    {!!gameContext.gameData.partnerData && !!gameResult.partnerAnswers &&
                                        <div className='result-item'>
                                            <div>{gameContext.gameData.partnerData.name}</div>
                                            <div className='result-player'>
                                                {Utils.decodeHtmlCharacters(gameResult.partnerAnswers[page].answer) || '-'} 
                                                {gameResult.partnerAnswers[page].valid ? 
                                                    <EmojiSmile className='correct'></EmojiSmile> : 
                                                    <EmojiFrown className='wrong'></EmojiFrown>}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="button-group-result">
                                    <button className="answer-button" disabled={page == 0 && 'disabled'} onClick={decreasePage}>Prev</button>
                                    <button className="answer-button" disabled={page === gameResult.questions.length - 1  && 'disabled'} onClick={increasePage}>Next</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>;
}

export default Result;