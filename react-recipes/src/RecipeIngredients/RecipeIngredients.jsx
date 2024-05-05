function RecipeIngredients({recipeData}){
    const dictionary = new Map();
    let arrayIngredients;

    if (!!recipeData){
        for(let i = 1; i<= 20; i++){
            if (!!recipeData['strIngredient'+i]){
                dictionary.set(recipeData['strIngredient'+i], recipeData['strMeasure'+i]);
            }
        }
        arrayIngredients = Array.from(dictionary, ([key, value]) => ({ key, value }));
    }
    
    return (
        <>
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
        </> 
    );
}

export default RecipeIngredients;