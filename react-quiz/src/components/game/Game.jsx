import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { useContext } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import LeaveRoom from '../leave-room/LeaveRoom';

function Game(){
    const gameContext = useContext(GameContext);   

    return <div>
            <p>Game between</p>
            <User data={gameContext.gameData.userData}></User>
            <p>and: </p>
            <User data={gameContext.gameData.partnerData}></User>

            {!!gameContext.gameData?.game?.questions && <Question></Question>}

            <LeaveRoom></LeaveRoom>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;