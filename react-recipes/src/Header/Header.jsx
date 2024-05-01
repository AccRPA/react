import {useState} from 'react';

function Header({searchChange}){
    const [inputValue, setInputValue] = useState('');

    function handleChange(event){
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h3>Search recipes by names or ingredientes separated by comma</h3>
            <input type="text" placeholder="type name or ingredients" value={inputValue} onChange={handleChange}></input>
            <button onClick={() => searchChange(inputValue)}>Search</button>
        </div>
    );
}

export default Header;