import {useState} from 'react';
import './app.css';

function App(){
    const [headerText, setHeaderText] = useState('Hello!');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    function handleClick(){
        setHeaderText('Submitted');
        setTitle(name);
    }

    function handleMouseOver(){
        setIsMouseOver(true);
    }

    function handleMouseOut(){
        setIsMouseOver(false);
    }

    function handleChange(event){
        setName(event.target.value);
    }

    return (
        <div>
            <h1>{headerText} {title}</h1>
            <input type="text" 
                onChange={handleChange}
                value={name}
                placeholder='your name here, damm it!'>
            </input>
            <button 
                className={isMouseOver ? 'visited': 'normal'} 
                onClick={handleClick} 
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                    Submit
            </button>
        </div>
    );
}

export default App;