import { useContext, useEffect, useState, useRef } from 'react';
import { GameContext } from '../../core/GameContext';
import QuestionAnswers from '../question_answers/QuestionAnswers';

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
            // send socket.io the answer
            setDisableAnswers(true);
            console.log('send answer to socket.io with answer: ' + userAnswer.current);
        }

        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    function selectAnswer(value){
        userAnswer.current = value;
        console.log(`answer selected: ${value}`);
    }

    return <div>
            Countdown: {time}
            <p>Question {questionData.number}</p>
            <p>Category {questionData.category}</p>
            <p>{questionData.question}</p>
            
            <QuestionAnswers 
                options={questionData.answers} 
                selectedAnswer={selectAnswer} 
                disableAnswers={disableAnswers}
            >
            </QuestionAnswers>
        </div>;
}

export default Question;