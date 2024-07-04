import { useContext, useEffect, useState, useRef } from 'react';
import { GameContext } from '../../core/GameContext';
import QuestionAnswers from '../question_answers/QuestionAnswers';
import { Utils } from '../../common/Utils';
import { socket } from '../../core/socket';

function Question(){
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
            socket.emit('validate_answer', userAnswer.current);
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

    return (!!questionData && <div>
            Countdown: {time}
            <p>Question {questionData.number}</p>
            <p>Category {questionData.category}</p>
            <p>{Utils.decodeHtmlCharacters(questionData.question)}</p>
            
            <QuestionAnswers 
                options={questionData.answers} 
                selectedAnswer={selectAnswer} 
                disableAnswers={disableAnswers}
            >
            </QuestionAnswers>
        </div>);
}

export default Question;