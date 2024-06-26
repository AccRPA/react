import './RecipeLine.css';

function RecipeLine({title, content}){
    return (
        !!content &&
        <div className='recipe-line'>
            <div className='title'>
                {title}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    );
}

export default RecipeLine;
