import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { useContext } from 'react';
import { GameContext } from '../../core/GameContext';

function Game(){
    const gameContext = useContext(GameContext);

    return <div>
            <p>Game between</p>
            <User data={gameContext.gameData.userData}></User>
            <p>and: </p>
            <User data={gameContext.gameData.partnerData}></User>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;