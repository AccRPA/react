function QuestionAnswers({answers}){
    function handleClick(){
        // event to send the selected answer
    }
    
    return <div>
            {answers.map((item, index) => <span onClick={handleClick} key={index}>{item}</span>)}
        </div>;
}

export default QuestionAnswers;