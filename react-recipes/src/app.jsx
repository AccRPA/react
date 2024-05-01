import Header from './Header/Header';
import Recipes from './Recipes/Recipes';
import {useState} from 'react';

function App(){
    const [inputSearch, setInputSearch] = useState();

    function searchChanged(value){
        setInputSearch(value);
    }

    return (
        <div>
            <Header searchChange={(value) => searchChanged(value)}></Header>
            <Recipes input={inputSearch}></Recipes>
        </div>
    );
}

export default App;