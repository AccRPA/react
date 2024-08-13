import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
    code: string
}

function ErrorPage({code}: Props){
    console.log(`Error code ${code}`);
    
    useEffect(() => {
        document.getElementById('errorCards')?.classList.add('animate');
    });
    
    return (
        <>
            <div className="error-header">
                <h1>Oops...</h1>
                <h3>We didn't find what you were looking for</h3>

            </div>
            <div className="error-cards" id="errorCards">                
                <div className="card" id="card1">
                    <div className="front">4</div>
                </div>
                <div className="card" id="card2">
                    <div className="front">{String.fromCodePoint(0x1F622)}</div>
                </div>
                <div className="card" id="card3">
                    <div className="front">4</div>
                </div>                
            </div>
            <Link className="link" to ="/">Go Home</Link>
        </>
    );
}

export default ErrorPage;