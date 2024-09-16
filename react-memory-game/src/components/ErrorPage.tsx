import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ErrorViewMode } from "../models/enum/ErrorViewMode.enum";
import { Button, Box } from "@mui/material";

interface Props {
    view: ErrorViewMode
}

function ErrorPage({view}: Props){
    const navigate = useNavigate();
    
    useEffect(() => {
        document.getElementById('errorCards')?.classList.add('animate');
    });
    
    return (
        <div className="motion-home">
            <div className="error-header">
                <h1>Oops...</h1>
                <h3>{
                    view === ErrorViewMode.NOT_FOUND ? 
                    `We didn't find what you were looking for` : 
                    `Something went wrong`
                    }
                </h3>

            </div>
            <div className="dummy-cards" id="errorCards">                
                <div className="card">
                    <div className="front">
                        { view === ErrorViewMode.NOT_FOUND ? 4 : String.fromCodePoint(0x1f648)}
                    </div>
                </div>
                <div className="card">
                    <div className="front">
                        { 
                            view === ErrorViewMode.NOT_FOUND ? 
                            //String.fromCodePoint(0x1F622) : 
                            String.fromCodePoint(0x1f97a) : 
                            String.fromCodePoint(0x1f649)
                        }
                    </div>
                </div>
                <div className="card">
                    <div className="front">
                        { view === ErrorViewMode.NOT_FOUND ? 4 :  String.fromCodePoint(0x1f64a)}
                    </div>
                </div>                
            </div>
            <Box display="flex" justifyContent="center" marginBottom="0.5">
                <Button variant="action" onClick={() => navigate('/')}>Go Home</Button>
            </Box>
        </div>
    );
}

export default ErrorPage;