import './User.css';
import { useContext } from 'react';
import { GameContext } from '../../core/GameContext';
import Score from '../score/Score';

function User({data}){
    const gameContext = useContext(GameContext); 

    return <div className="user">
            {(!!data?.avatar && <span className="avatar">{String.fromCodePoint(data.avatar)}</span>)} 
            <div>
                <span className="name">{data?.name}</span>
                <Score score={gameContext.gameData.game.score}></Score>
            </div>
        </div>;
}

export default User;