import { socket } from '../../core/socket';

function LeaveRoom(){    
    const onLeaveRoom = () => {
        socket.emit('leave_room');
    }
    return <button onClick={onLeaveRoom}>Leave game</button>;
}

export default LeaveRoom;