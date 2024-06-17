import { SocketContext } from '../../SocketContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

function Match(){
    const navigate = useNavigate();
    const statusContext = useContext(SocketContext);
    
    useEffect(() => {
        if (!statusContext.isConnected){
            navigate("/"); 
        }
    }, []);

    return <div>Match!</div>;
}

export default Match;