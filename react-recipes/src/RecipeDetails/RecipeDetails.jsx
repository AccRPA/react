import { useState, useEffect, useRef } from "react";
import RecipeLine from "../RecipeLine/RecipeLine";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import './RecipeDetails.css';

function RecipeDetails({recipeId, closeDetailsModal}){
    const detailsModalRef = useRef(null);
    const [recipeData, setRecipeData] = useState();    
    const urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId;

    useEffect(() => {
        fetch(urlDetails)
        .then(response => response.json())
        .then(data => {
            detailsModalRef.current.classList.add('openModal');
            setRecipeData(data?.meals?.[0]);
        });
    }, [recipeId]);

    function closeDetails(){
        detailsModalRef.current.classList.remove('openModal');
        detailsModalRef.current.classList.add('closeModal');
        // delay according to the close animation
        setTimeout(() => closeDetailsModal(), 500);
    }

    function getYoutubeEmbedURL(url){
        return url?.replace('watch?v=', 'embed/');
    }

    return (
        <div className="recipe-detail-back">
            <div ref={detailsModalRef} className="recipe-details-container">
                <span className="close" onClick={closeDetails}>X</span>
                <div className="title">
                    <h2>{recipeData?.strMeal}</h2>
                </div>
                <div className="recipe-details">
                    <div className="top-section">
                        <img src={recipeData?.strMealThumb}></img>
                        <div>
                            <RecipeLine title="Category" content={recipeData?.strCategory}></RecipeLine>
                            <RecipeLine title="Area" content={recipeData?.strArea}></RecipeLine>
                            <RecipeLine title="Tags" content={recipeData?.strTags}></RecipeLine>
                            <RecipeLine title="Drink" content={recipeData?.strDrinkAlternate}></RecipeLine>
                        </div>
                    </div>
                    <RecipeIngredients recipeData={recipeData}></RecipeIngredients>
                    <div>
                        <RecipeLine title="Instructions" content={recipeData?.strInstructions}></RecipeLine>
                    </div>
                    { !!recipeData?.strYoutube && 
                    <div className="video-container">
                        <iframe className="recipe-video" src={getYoutubeEmbedURL(recipeData?.strYoutube)} title="Recipe video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;