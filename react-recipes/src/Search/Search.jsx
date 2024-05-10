import { useRef } from 'react';
import './Search.css';

function Search({input, inputSearch, searchChange}){
    const inputRef = useRef();

    function handleChange(event){
        inputSearch(event.target.value);
    }

    function onEnter(event){
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleDone(input);
            event.preventDefault();
        }
    }

    function handleDone(){
        inputRef.current.blur();
        searchChange(input);
    }

    return <div className='search input-group'>
                <input ref={inputRef} type="text" 
                placeholder="type ingredient" 
                value={input} 
                onChange={handleChange}
                onKeyUp={onEnter}></input>
                <button onClick={() => handleDone(input)}>Search</button>
            </div>;
}

export default Search;