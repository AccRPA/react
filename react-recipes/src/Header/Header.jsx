import './Header.css';

function Header({searchChange}){
    function goHome(){
        searchChange('');
    }

    return (
        <header>
            <h1 onClick={goHome}>Find recipes</h1>
        </header>
    );
}

export default Header;