import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import User from '../user/User';
import { socket } from '../../core/socket';
import Header from '../header/Header';
import { Utils } from '../../common/Utils';

function Result(){
    const gameContext = useContext(GameContext);
    const [gameResult, setGameResult] = useState({});
    const [page, setPage] = useState(0);

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
                        <p>Game finished! Result:</p>
                        {!!gameResult?.questions && 
                            <>
                                <div>
                                    {gameResult.questions[page].number}
                                    {Utils.decodeHtmlCharacters(gameResult.questions[page].category)}
                                    {Utils.decodeHtmlCharacters(gameResult.questions[page].question)}
                                    {Utils.decodeHtmlCharacters(gameResult.questions[page].correctAnswer)}
                                </div>
                                <div>
                                    {!!gameResult?.answers && 
                                        <div>You: {Utils.decodeHtmlCharacters(gameResult.answers[page].answer)} {gameResult.answers[page].valid}</div>}
                                    {!!gameContext.gameData.partnerData && !!gameResult.partnerAnswers &&
                                        <div>Partner: {Utils.decodeHtmlCharacters(gameResult.partnerAnswers[page].answer)} {gameResult.partnerAnswers[page].valid}</div>
                                    }
                                </div>
                                <button disabled={page == 0 && 'disabled'} onClick={decreasePage}>Prev</button>
                                <button disabled={page === gameResult.questions.length - 1  && 'disabled'} onClick={increasePage}>Next</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>;
}

export default Result;