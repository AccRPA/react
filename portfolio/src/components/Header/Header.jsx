import './Header.css';
import { useContext } from 'react';
import { MenuOptions } from '../../MenuOptions';
import { MenuContext } from '../../MenuContext';

function Header(){
    const menuContext = useContext(MenuContext);
    
    function handleClick(option){
        menuContext.setMenuClicked(true);
        menuContext.setMenuActive(option);
        document.querySelector(`#${option}`).scrollIntoView();
    }

    return (<header>
        <nav>
            <ul>
                {MenuOptions.map((option, index) => {
                    return (
                        <li key={index}>
                            <span name={option}
                                className={menuContext.menuActive === option ? 'selected' : ''}
                                onClick={() => handleClick(option)}>
                                {option}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </header>);
}

export default Header;
