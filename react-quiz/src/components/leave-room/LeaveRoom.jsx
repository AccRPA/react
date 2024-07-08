import { socket } from '../../core/socket';

function LeaveRoom(){    
    const onLeaveRoom = () => {
        socket.emit('leave_room');
    }
    return <button className="flat text-pale " onClick={onLeaveRoom}>Leave game</button>;
}

export default LeaveRoom;