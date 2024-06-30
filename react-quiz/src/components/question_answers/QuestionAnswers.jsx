function QuestionAnswers({answers}){

    //answers.shuffle();
    
    return <div>
            {answers.map((item, index) => <p key={index}>{item}</p>)}
        </div>;
}

export default QuestionAnswers;