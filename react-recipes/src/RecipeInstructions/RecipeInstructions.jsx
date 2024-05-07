import './RecipeInstructions.css';

function RecipeInstructions({title, content}){
    return (
        !!content &&
        <div className='recipe-instructions'>
            <div className='title'>
                {title}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    );
}

export default RecipeInstructions;
