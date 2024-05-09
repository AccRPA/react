import './Search.css';

function Search({input, inputSearch, searchChange}){
    function handleChange(event){
        inputSearch(event.target.value);
    }

    function onEnter(event){
        if (event.key === 'Enter' || event.keyCode === 13) {
            searchChange(input);
            event.preventDefault();
        }
    }

    return <div className='search input-group'>
                <input type="text" 
                placeholder="type ingredient" 
                value={input} 
                onChange={handleChange}
                onKeyUp={onEnter}></input>
                <button onClick={() => searchChange(input)}>Search</button>
            </div>;
}

export default Search;