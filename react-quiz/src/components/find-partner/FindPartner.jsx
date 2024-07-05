import { socket } from '../../core/socket';

function FindPartner(){
    function onFindPartner(){
        socket.emit('find_match');
    }

    return <button onClick={onFindPartner}>Find partner</button>
}

export default FindPartner;