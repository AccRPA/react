import { GameContext } from '../../core/GameContext';
import { useContext, useEffect } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';

function Match(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onMatchPartner(name, avatar){
            gameContext.setPartnerData({
                name,
                avatar
            });
        }

        function onPartnerDisconnected(){
            gameContext.setPartnerData({
                name: '',
                avatar: null,
            });
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
                <p>Match for: </p>
                <User data={gameContext.userData}></User>
                <p>width: </p>
                <User data={gameContext.partnerData}></User>
                <ConnectedUsers></ConnectedUsers>
                <DisconnectButton></DisconnectButton>
            </div>;
}

export default Match;