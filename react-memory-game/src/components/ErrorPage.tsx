import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorViewMode } from "../models/enum/ErrorViewMode.enum";

interface Props {
    view: ErrorViewMode
}

function ErrorPage({view}: Props){
    
    useEffect(() => {
        document.getElementById('errorCards')?.classList.add('animate');
    });
    
    return (
        <>
            <div className="error-header">
                <h1>Oops...</h1>
                <h3>{
                    view === ErrorViewMode.NOT_FOUND ? 
                    `We didn't find what you were looking for` : 
                    `Something went wrong`
                    }
                </h3>

            </div>
            <div className="error-cards" id="errorCards">                
                <div className="card" id="card1">
                    <div className="front">
                        { view === ErrorViewMode.NOT_FOUND ? 4 : String.fromCodePoint(0x1f648)}
                    </div>
                </div>
                <div className="card" id="card2">
                    <div className="front">
                        { 
                            view === ErrorViewMode.NOT_FOUND ? 
                            //String.fromCodePoint(0x1F622) : 
                            String.fromCodePoint(0x1f97a) : 
                            String.fromCodePoint(0x1f649)
                        }
                    </div>
                </div>
                <div className="card" id="card3">
                    <div className="front">
                        { view === ErrorViewMode.NOT_FOUND ? 4 :  String.fromCodePoint(0x1f64a)}
                    </div>
                </div>                
            </div>
            <Link className="link" to ="/">Go Home</Link>
        </>
    );
}

export default ErrorPage;