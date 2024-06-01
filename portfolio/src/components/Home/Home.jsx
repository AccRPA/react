import './Home.css';
import { useContext } from 'react';
import { MenuContext } from '../../MenuContext';

function Home(){
    const menuContext = useContext(MenuContext);

    function handleClick(){
        menuContext.setMenuClicked(true);
        menuContext.setMenuActive('skills');
        document.querySelector(`#skills`).scrollIntoView();
    }

    return (
    <section id="home">
        <div className="container">
            <div className="home">
                <p>Hi! My name is Jose. </p>
                <p>I am a Frontend developer. </p>
                <p>Take a look at my portfolio!</p>
                <div>
                    <span onClick={handleClick}>
                        <i className="arrow down" aria-label='skills'></i>
                    </span>
                </div>
            </div>
        </div>
    </section>);
}

export default Home;