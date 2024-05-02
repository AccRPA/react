import {useState, useEffect} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './Recipes.css';

function Recipes({input}){
    const [recipes, setRecipes] = useState([]);
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + (input || 'chicken');
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipes(data?.meals);
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

    return (
        <div className='content'>
            <div className='items-found'>{getElementsFound()}</div>
            <div className="recipes-container">
                { recipes?.map(item => <RecipeItem recipe={item} key={item.idMeal}></RecipeItem>) }
            </div>
        </div>
    );
}

export default Recipes;