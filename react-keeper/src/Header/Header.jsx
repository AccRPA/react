import './Header.css';
import HighlightIcon from '@mui/icons-material/Highlight';
import ChangeTheme from '../ChangeTheme/ChangeTheme';

function Header(){
    return (<header>
        <div className="container">
            <HighlightIcon className="icon"></HighlightIcon>
            <h1 className="title">Keeper</h1>
        </div>
        <ChangeTheme></ChangeTheme>
    </header>);
}

export default Header;