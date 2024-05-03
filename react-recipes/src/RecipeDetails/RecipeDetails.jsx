import { useState, useEffect } from "react";
import './RecipeDetails.css';

function RecipeDetails({recipeId, closeDetailsModal}){
    const [recipeData, setRecipeData] = useState();    
    const urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId;

    useEffect(() => {
        fetch(urlDetails)
        .then(response => response.json())
        .then(data => {
            setRecipeData(data?.meals?.[0]);
        });
    }, [recipeId]);

    function closeDetails(){
        closeDetailsModal();
    }

    return (
        <div className="recipe-details-container">
            <span className="close" onClick={closeDetails}>X</span>
            <div className="top">
                <h2>{recipeData?.strMeal}</h2>
            </div>
        </div>
    );
}

export default RecipeDetails;