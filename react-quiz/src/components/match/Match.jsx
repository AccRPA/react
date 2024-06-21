import { GameContext } from '../../core/GameContext';
import { useContext, useEffect } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { Player } from '../../core/Player';

function Match(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function onMatchPartner(name, avatar){
            gameContext.setGameData(previous =>{
                const partnerData = new Player();
                partnerData.name = name;
                partnerData.avatar = avatar;
                return {
                    ...previous,
                    userIsPlaying: true,
                    partnerData: partnerData
                }
            });
        }

        function onPartnerDisconnected(){
            gameContext.setGameData(previous =>{
                return {
                    ...previous,
                    userIsPlaying: false,
                    partnerData: null
                }
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
                <User data={gameContext.gameData.userData}></User>
                <p>width: </p>
                <User data={gameContext.gameData.partnerData}></User>
                <ConnectedUsers></ConnectedUsers>
                <DisconnectButton></DisconnectButton>
            </div>;
}

export default Match;