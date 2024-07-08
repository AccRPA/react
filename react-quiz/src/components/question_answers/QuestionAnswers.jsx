import './QuestionAnswers.css';
import { Utils } from '../../common/Utils';

function QuestionAnswers({options, selectedAnswer, answer, disableAnswers}){

    if (!answer){
        clearSelection();
    }
    
    function handleClick(event){
        setSelected(event);
        if (!disableAnswers){
            selectedAnswer(event.target.value);
        }
    }

    function setSelected(event){
        clearSelection();
        event.target.classList.add("primary");
    }

    function clearSelection(){
        for(let element of document.getElementsByClassName('answer-button')) {
            element.classList.remove("primary");
        };
    }        
    
    return <div className="answers">
            {options.map((text, index) => 
                <button className="answer-button"
                    onClick={handleClick} 
                    key={index} 
                    value={text} 
                    disabled={disableAnswers}
                >
                    {Utils.decodeHtmlCharacters(text)}
                </button>
            )}
        </div>;
}

export default QuestionAnswers;