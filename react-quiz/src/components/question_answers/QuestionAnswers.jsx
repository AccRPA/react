function QuestionAnswers({answers}){

    function shuffleArray(answers){
        const temp = [...answers];
        for(let i = 0; i < temp.length; i++){
            const random = Math.floor(Math.random() * temp.length);
            [temp[i], temp[random]] = [temp[random], temp[i]];
        }
        return temp;
    }


    function handleClick(){
        // event to send the selected answer
    }
    
    return <div>
            {shuffleArray(answers).map((item, index) => <span onClick={handleClick} key={index}>{item}</span>)}
        </div>;
}

export default QuestionAnswers;