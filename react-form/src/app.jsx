import {useState} from 'react';
import './app.css';

function App(){
    const [headerText, setHeaderText] = useState('Hello!');
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    function handleClick(event){
        setHeaderText('Submitted');
        setTitle(name);
        event.preventDefault();
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
            <form onSubmit={handleClick}>
                <input type="text" 
                    onChange={handleChange}
                    value={name}
                    placeholder='your name here'>
                </input>
                <button 
                    className={isMouseOver ? 'visited': 'normal'}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                        Submit
                </button>
            </form>
        </div>
    );
}

export default App;