import './Header.css';
import { MenuOptions } from '../../MenuOptions';

function Header(){

    return (<header>
        <nav>
            <ul>
                {MenuOptions.map((option, index) => {
                    return <li key={index}>
                                <a name={option} href={`#${option}`}>
                                    {option}
                                </a>
                            </li>;
                })}
            </ul>
        </nav>
    </header>);
}

export default Header;
