import { useContext } from 'react';
import { MenuContext } from '../../MenuContext';
import './Header.css';
import { MenuOptions } from '../../MenuOptions';

function Header(){
    const menuContext = useContext(MenuContext);

    function setMenu(event){
        menuContext.setMenuSelected(event.target.name);
    }

    return (<header>
        <nav>
            <ul>
                {MenuOptions.map((option, index) => {
                    return <li key={index}>
                                <a onClick={setMenu} name={option} href={`#${option}`} 
                                    className={menuContext.menuSelected === option ? 'active' : ''}>
                                    {option}
                                </a>
                            </li>;
                })}
            </ul>
        </nav>
    </header>);
}

export default Header;
