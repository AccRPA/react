import './Header.css';

function Header(){
    return (<header>
        <nav>
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>);
}

export default Header;
