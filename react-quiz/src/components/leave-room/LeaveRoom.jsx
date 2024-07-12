import { socket } from '../../core/socket';
import { ArrowClockwise, SignTurnSlightLeft } from 'react-bootstrap-icons';

function LeaveRoom({replayButton}){    
    const onLeaveRoom = () => {
        socket.emit('leave_room');
    }
    return <button className="flat text-pale " onClick={onLeaveRoom} title={replayButton ? "Play again" : "Leave game"}>
            {replayButton ? <ArrowClockwise className='show-lg'/> : <SignTurnSlightLeft className="show-lg"/>}
            <span className="hide-xs hide-lg">{replayButton ? "Play again" : "Leave game"}</span>
        </button>;
}

export default LeaveRoom;