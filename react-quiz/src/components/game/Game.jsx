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
            
            {!!gameContext.gameData?.game?.questions && <p>{gameContext.gameData.game.questions[0].question}</p>}
            
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;