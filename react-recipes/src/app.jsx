import Header from './Header/Header';
import Recipes from './Recipes/Recipes';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import {useState} from 'react';
import { initializeApp } from "firebase/app";

function App(){
    const [inputSearch, setInputSearch] = useState();
    const [detailId, setDetailId] = useState();

    const firebaseConfig = {
        apiKey: "AIzaSyA3e9s4lnEsKQveaysfKRkZF-uvKkskNFo",
        authDomain: "recipes-lookup.firebaseapp.com",
        projectId: "recipes-lookup",
        storageBucket: "recipes-lookup.appspot.com",
        messagingSenderId: "1001400776730",
        appId: "1:1001400776730:web:9f624bde439f6ccd4b39a3"
    };
    const app = initializeApp(firebaseConfig);

    function searchChanged(value){
        setInputSearch(value);
    }

    function openDetails(id){
        setDetailId(id);
    }

    function closeDetails(){
        setDetailId(null);
    }
    
    return (
        <div>
            <Header searchChange={(value) => searchChanged(value)}></Header>
            <Recipes input={inputSearch} openDetails={(id) => openDetails(id)}></Recipes>
            {!!detailId && <RecipeDetails recipeId={detailId} closeDetailsModal={() => closeDetails()}></RecipeDetails> }
        </div>
    );
}

export default App;