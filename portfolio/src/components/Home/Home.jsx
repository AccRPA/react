import './Home.css';
import { useContext } from 'react';
import { MenuContext } from '../../MenuContext';

function Home(){
    const menuContext = useContext(MenuContext);

    function setMenu(){
        menuContext.setMenuSelected('skills');
    }
    return (
    <div className='section-container' id="home">
        <div className="home">
            <p>Hi! I am Jose. Frontend developer. Take a look at my portfolio. :)</p>
            <div>
                <a href="#skills" onClick={setMenu}>
                    <i className="arrow down"></i>
                </a>
            </div>
        </div>
    </div>);
}

export default Home;