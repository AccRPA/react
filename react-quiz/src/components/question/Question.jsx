import { useContext } from 'react';
import { GameContext } from '../../core/GameContext';
import QuestionAnswers from '../question_answers/QuestionAnswers';

function Question(){
    const gameContext = useContext(GameContext);
    const questionData = gameContext.gameData.game.questions[0];

    return <div>
            <p>Question {questionData.number}</p>
            <p>Category {questionData.category}</p>
            <p>{questionData.question}</p>
            
            <QuestionAnswers answers={questionData.answers}></QuestionAnswers>
        </div>;
}

export default Question;