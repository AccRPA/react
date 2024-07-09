import './User.css';
import { useContext } from 'react';
import { GameContext } from '../../core/GameContext';
import Score from '../score/Score';

function User({data, showScore, switchOrder, showYou}){
    const gameContext = useContext(GameContext); 
    const switchClass = switchOrder ? 'switch' : '';
    
    return <div className={`user ${switchClass}`}>
            {(!!data?.avatar && <span className="avatar">{String.fromCodePoint(data.avatar)}</span>)} 
            <div className={switchClass}>
                <span className="name">{data?.name} {!!showYou && '(You)'}</span>
                {showScore && <Score score={gameContext.gameData.game.score}></Score>}
            </div>
        </div>;
}

export default User;