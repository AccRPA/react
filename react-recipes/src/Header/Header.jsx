import {useState} from 'react';
import './Header.css';

function Header({searchChange}){
    const [inputValue, setInputValue] = useState('');

    function handleChange(event){
        setInputValue(event.target.value);
    }

    function onEnter(event){
        if (event.key === 'Enter' || event.keyCode === 13) {
            searchChange(inputValue);
            event.preventDefault();
        }
    }

    function goHome(){
        setInputValue('');
        searchChange('');
    }

    return (
        <header>
            <h1 onClick={goHome}>Find recipes</h1>
            <div className='input-group'>
                <input type="text" 
                placeholder="type ingredient" 
                value={inputValue} 
                onChange={handleChange}
                onKeyUp={onEnter}></input>
                <button onClick={() => searchChange(inputValue)}>Search</button>
            </div>
        </header>
    );
}

export default Header;