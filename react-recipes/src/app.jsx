import Header from './Header/Header';
import Recipes from './Recipes/Recipes';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import Ribbon from './Ribbon/Ribbon';
import {useState} from 'react';
import Search from './Search/Search';

function App(){
    const [finalSearch, setFinalSearch] = useState();
    const [inputSearch, setInputSearch] = useState('');
    const [detailId, setDetailId] = useState();

    function searchChanged(value){
        setInputSearch(value);
        setFinalSearch(value);
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
            <Search input={inputSearch} inputSearch={(value) => setInputSearch(value)} searchChange={(value) => searchChanged(value)}></Search>
            <Recipes input={finalSearch} openDetails={(id) => openDetails(id)}></Recipes>
            {!!detailId && <RecipeDetails recipeId={detailId} closeDetailsModal={() => closeDetails()}></RecipeDetails> }
        </div>
    );
}

export default App;