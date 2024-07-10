import { socket } from '../../core/socket';
import { SignTurnSlightLeft } from 'react-bootstrap-icons';

function LeaveRoom(){    
    const onLeaveRoom = () => {
        socket.emit('leave_room');
    }
    return <button className="flat text-pale " onClick={onLeaveRoom} title="Leave game">
            <SignTurnSlightLeft className="show-lg"/>
            <span className="hide-xs hide-lg">Leave game</span>
        </button>;
}

export default LeaveRoom;