import Love from '../Love/Love';
import './Header.css';

function Header({searchChange}){
    function goHome(){
        searchChange('');
    }

    return (
        <header>
            <h1 onClick={goHome}>Find recipes</h1>
            <Love></Love>
        </header>
    );
}

export default Header;