import './RecipeItem.css';

function RecipeItem({recipe}){
    const {strMeal, strMealThumb} = recipe;
    return (
        <div className='recipe-item'>
            <div className='title'>
                <p>{strMeal}</p>
            </div>
            <img src={strMealThumb}></img>
        </div>
    );
}

export default RecipeItem;