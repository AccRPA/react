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

        function onPartnerDisconnected(){
            setPartner(null);
            socket.emit('leave_room');
        }
    
        socket.on('match_partner', onMatchPartner);
        socket.on('partner_disconnected', onPartnerDisconnected);

        return () => {
            socket.off('match_partner', onMatchPartner);
            socket.on('partner_disconnected', onPartnerDisconnected);
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