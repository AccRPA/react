function RecipeItem({recipe}){
    const {strMeal, strMealThumb} = recipe;
    return (
        <div>
            <h6>{strMeal}</h6>
            <img src={strMealThumb}></img>    
        </div>
    );
}

export default RecipeItem;