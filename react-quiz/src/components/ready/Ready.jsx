import DisconnectButton from '../disconnect-button/DisconnectButton';
import LeaveRoom from '../leave-room/LeaveRoom';
import { GameContext } from '../../core/GameContext';
import { useContext } from 'react';
import User from '../user/User';

function Ready(){
    const gameContext = useContext(GameContext);

    return <div>
        {
            !!gameContext.gameData.partnerData && 
            <div>
                <p>Game ready for: </p>
                <User data={gameContext.gameData.userData}></User>
                <p>width: </p>
                <User data={gameContext.gameData.partnerData}></User>
                <div>Hit Start when you are ready</div>
            </div>
        }
        <button>Start</button>
        <LeaveRoom></LeaveRoom>
        <DisconnectButton></DisconnectButton>
    </div>;
}

export default Ready;