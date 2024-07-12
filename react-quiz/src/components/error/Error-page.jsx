import './Error-page.css';

export default function ErrorPage() {

    function goPlay(){
        location.href = '';
    }

    return (
        <div className="error-container">
            <div>Quiz Game!</div>
            <div className="game-container">
                <div className="game-content">
                    <div className='card-content'>
                        <div id="error-page">
                            <h1>Oops!</h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                            <button className="button primary" onClick={goPlay}>Go play</button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}