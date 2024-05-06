import Header from './Header/Header';
import Recipes from './Recipes/Recipes';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import Ribbon from './Ribbon/Ribbon';
import {useState} from 'react';

function App(){
    const [inputSearch, setInputSearch] = useState();
    const [detailId, setDetailId] = useState();

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
            <Ribbon></Ribbon>
            <Header searchChange={(value) => searchChanged(value)}></Header>
            <Recipes input={inputSearch} openDetails={(id) => openDetails(id)}></Recipes>
            {!!detailId && <RecipeDetails recipeId={detailId} closeDetailsModal={() => closeDetails()}></RecipeDetails> }
        </div>
    );
}

export default App;