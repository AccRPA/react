import './Question.css';
import { useContext, useEffect, useState, useRef } from 'react';
import { GameContext } from '../../core/GameContext';
import QuestionAnswers from '../question_answers/QuestionAnswers';
import { Utils } from '../../common/Utils';
import { socket } from '../../core/socket';

function Question({waiting}){
    const maxSexconds = 10;
    const gameContext = useContext(GameContext);
    const questionData = gameContext.gameData.game.getQuestion();
    const [time, setTime] = useState(maxSexconds);
    const [disableAnswers, setDisableAnswers] = useState(false);
    let userAnswer = useRef();

    useEffect(() => {
        let timeId;
        if (time > 0){
            timeId = setTimeout(() => setTime(previous => --previous), 1000);
        }else{
            setDisableAnswers(true);
            waiting(true);
            socket.emit('validate_answer_request', userAnswer.current);
        }

        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    useEffect(() => {
        userAnswer.current = null;
        setTime(maxSexconds);
        setDisableAnswers(false);
    }, [gameContext.gameData.game.questionNumber]);

    function selectAnswer(value){
        userAnswer.current = value;
    }

    return (!!questionData && <div className='card-content'>
            <span className='highlight'>{time}</span>
            <div className='question-container'>
                <div className='question-info'>
                    <p>Question {questionData.number}/10</p>
                    <p>{Utils.decodeHtmlCharacters(questionData.category)}</p>
                </div>
                <p className='question'>{Utils.decodeHtmlCharacters(questionData.question)}</p>
                
                <QuestionAnswers 
                    options={questionData.answers} 
                    selectedAnswer={selectAnswer} 
                    answer={userAnswer.current}
                    disableAnswers={disableAnswers}
                >
                </QuestionAnswers>
            </div>
        </div>);
}

export default Question;