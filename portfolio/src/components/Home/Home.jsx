import './Home.css';

function Home(){
    return (
    <section id="home">
        <div className="container">
            <div className="home">
                <p>Hi &#128075;! My name is Jose. </p>
                <p>I am a Frontend developer. </p>
                <p>Take a look at my portfolio!</p>
                <div>
                    <a href="#skills">
                        <i className="arrow down"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>);
}

export default Home;