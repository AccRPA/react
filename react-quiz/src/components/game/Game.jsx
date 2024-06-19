import DisconnectButton from '../disconnect-button/DisconnectButton';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import { useEffect, useState } from 'react';
import { socket } from '../../socket';

function Game(){
    const [partner, setPartner] = useState();
    
    useEffect(() => {
        function onMatchPartner(data){
            setPartner(data);
        }
    
        socket.on('match_partner', onMatchPartner);

        return () => {
            socket.off('match_partner', onMatchPartner);
        };
    }, []);

    return <div>
            <p>Game!</p>
            <p>Match width: {partner}</p>
            <ConnectedUsers></ConnectedUsers>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;