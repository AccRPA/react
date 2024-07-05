import { socket } from '../../core/socket';

function PlaySolo(){
    function handlePlaySolo(){
        socket.emit('play_solo');
    }

    return <button onClick={handlePlaySolo}>Play solo</button>
}

export default PlaySolo;