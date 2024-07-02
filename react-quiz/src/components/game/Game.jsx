import DisconnectButton from '../disconnect-button/DisconnectButton';
import User from '../user/User';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../core/GameContext';
import Question from '../question/Question';
import LeaveRoom from '../leave-room/LeaveRoom';

function Game(){
    const gameContext = useContext(GameContext);
    const [time, setTime] = useState(1);
    const maxSexconds = 5;

    useEffect(() => {
        let timeId;
        if (time < maxSexconds){
            timeId = setTimeout(() => setTime(previous => ++previous), 1000);
        }else{
            // send socket.io the answer
            console.log('send answer to socket.io');
        }

        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    return <div>
            {time}
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