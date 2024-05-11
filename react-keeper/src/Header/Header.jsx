import './Header.css';
import Love from '../Love/Love';
import HighlightIcon from '@mui/icons-material/Highlight';
import ChangeTheme from '../ChangeTheme/ChangeTheme';

function Header(){
    return (<header>
        <div className="container">
            <div className="title">
                <HighlightIcon className="icon"></HighlightIcon>
                <h1 className="title">Keeper</h1>
            </div>
            <Love></Love>
        </div>
        <ChangeTheme></ChangeTheme>
    </header>);
}

export default Header;