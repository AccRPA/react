import './RecipeItem.css';

function RecipeItem({recipe, selectedId}){
    const {idMeal, strMeal, strMealThumb} = recipe;

    function handleClick(){
        selectedId(idMeal);
    }

    return (
        <div className='recipe-item' onClick={handleClick}>
            <div className='title'>
                <p>{strMeal}</p>
            </div>
            <img src={strMealThumb}></img>
        </div>
    );
}

export default RecipeItem;