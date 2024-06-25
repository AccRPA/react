import { socket } from '../../core/socket';

function LeaveRoom(){    
    const onLeaveRoom = () => {
        socket.emit('leave_room');
    }
    return <button onClick={onLeaveRoom}>Leave room</button>;
}

export default LeaveRoom;