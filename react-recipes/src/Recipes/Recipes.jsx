import {useState, useEffect} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './Recipes.css';

function Recipes({input, openDetails}){
    const [recipes, setRecipes] = useState([]);
    const ingredients=['chicken', 'egg', 'beef', 'lamb', 'tomato', 'salmon'];
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
    
    useEffect(() => {
        const randomIngredient = ingredients[getRandomInt(ingredients.length)];
        const urlCall = !input ? `${url}${randomIngredient}` : `${url}${input}`;        
        fetch(urlCall)
        .then(response => response.json())
        .then(data => {
            setRecipes(!input ? data?.meals.slice(0, 4) : data?.meals);
        });
    }, [input]);

    function getElementsFound(){
        const amount = recipes?.length || 0;
        if (amount === 0){
            return 'No recipes found';
        }else {
            return `Found ${amount} ${recipes?.length === 1 ? 'result' : 'results'}`;
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='content'>
            <div className='items-found'>{getElementsFound()}</div>
            <div className="recipes-container">
                { recipes?.map(item => <RecipeItem recipe={item} key={item.idMeal} selectedId={openDetails}></RecipeItem>) }
            </div>
        </div>
    );
}

export default Recipes;