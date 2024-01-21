import './header.css';

function Header(){
    return (<header>
        <nav>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>);
}

export default Header;
