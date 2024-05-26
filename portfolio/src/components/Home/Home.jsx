import './Home.css';

function Home(){
    return (
    <section id="home">
        <div className="container">
            <div className="home">
                <p>Hi <span className="wave">&#128075;</span> ! My name is Jose. </p>
                <p>I am a Frontend developer. </p>
                <p>Take a look at my portfolio!</p>
                <div>
                    <a href="#skills">
                        <i className="arrow down" aria-label='skills'></i>
                    </a>
                </div>
            </div>
        </div>
    </section>);
}

export default Home;