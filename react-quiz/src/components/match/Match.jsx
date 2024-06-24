import { GameContext } from '../../core/GameContext';
import { useContext, useEffect, useState } from 'react';
import { socket } from '../../core/socket';
import ConnectedUsers from '../connected-users/ConnectedUsers';
import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';

function Match(){
    const gameContext = useContext(GameContext);
    const [usersFree, setUsersFree] = useState();

    useEffect(() => {
        // this handle event only makes sense in this view
        function onUsersFree(userFree){
            setUsersFree(userFree);
        }

        socket.on('users_free', onUsersFree);

        return () => {
            socket.off('users_free', onUsersFree);
        }
    }, []);

    function handleFindMatch(){
        socket.emit('find_match');
    }

    return <div>
                {usersFree}
                <button onClick={handleFindMatch}>Find match</button>
                {
                    !!gameContext.gameData.partnerData && 
                    <div>
                        <p>Match for: </p>
                        <User data={gameContext.gameData.userData}></User>
                        <p>width: </p>
                        <User data={gameContext.gameData.partnerData}></User>
                    </div>
                }
                <DisconnectButton></DisconnectButton>
                <ConnectedUsers></ConnectedUsers>
            </div>;
}

export default Match;