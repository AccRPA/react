import './RecipeIngredients.css';

function RecipeIngredients({recipeData}){
    const arrayIngredients = [];

    if (!!recipeData){
        for(let i = 1; i<= 20; i++){
            if (!!recipeData['strIngredient'+i]){
                arrayIngredients.push({
                    key: recipeData['strIngredient'+i],
                    value: recipeData['strMeasure'+i]
                })
            }
        }
    }
    
    return (
        <div className='ingredients-container'>            
            { !!arrayIngredients && arrayIngredients.map((ing) => {
                return (
                    <dl key={ing.key}>
                        <dt>
                            {ing.key}
                        </dt>
                        <dd>
                            {ing.value}
                        </dd>
                    </dl>
                )
            })}
        </div> 
    );
}

export default RecipeIngredients;