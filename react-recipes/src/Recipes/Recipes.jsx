import {useState, useEffect} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';

function Recipes({input}){
    const [recipes, setRecipes] = useState([]);
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + (input || 'tomato');
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipes(data?.meals);
        });
    }, [input]);

    return (
        <div>
            { recipes?.map(item => <RecipeItem recipe={item} key={item.idMeal}></RecipeItem>) }
        </div>
    );
}

export default Recipes;