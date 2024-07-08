import { useContext } from "react";
import { socket } from '../../core/socket';
import { GameContext } from "../../core/GameContext";

function FindPartner(){
    const gameContext = useContext(GameContext);
    const usersFree = gameContext.gameData.totalUsersFree;
    function onFindPartner(){
        socket.emit('find_match');
    }

    return <button className="primary" onClick={onFindPartner} disabled={usersFree == 0}>Find partner</button>
}

export default FindPartner;