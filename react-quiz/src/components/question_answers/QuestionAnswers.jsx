import { Utils } from '../../common/Utils';

function QuestionAnswers({options, selectedAnswer, disableAnswers}){
    function handleClick(event){
        if (!disableAnswers){
            selectedAnswer(event.target.value);
        }
    }
    
    return <div>
            {options.map((text, index) => 
                <button 
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