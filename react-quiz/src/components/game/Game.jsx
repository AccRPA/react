import DisconnectButton from '../disconnect-button/DisconnectButton';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import { useContext, useEffect, useState } from 'react';
import { socket } from '../../core/socket';
import { GameContext } from '../../core/GameContext';

function Game(){
    const gameContext = useContext(GameContext);
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
            <p>Game for {gameContext.userData.name}!</p>
            <p>Match width: {partner}</p>
            <ConnectedUsers></ConnectedUsers>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;