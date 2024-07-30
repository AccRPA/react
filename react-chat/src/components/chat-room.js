import { Link, redirect, useParams } from 'react-router-dom';
import { chatRooms } from '../rooms';
import { MessageInput } from './message-input';
import { MessageList } from './message-list';
import { User } from './user';

function ChatRoom() {
    const params = useParams();
    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        redirect('/error');
    }

    return (
        <div className='chat-room'>
            <div className='buttons-group'>
                <User></User>
                <Link to="/lobby">⬅️ Back to rooms</Link>
            </div>
            <div className="chat-content">
                <h2>{room.title}</h2>
                <div className="messages-container">
                    <MessageList roomId={room.id} />
                    <MessageInput roomId={room.id} />
                </div>
            </div>
        </div>
    );
}

export { ChatRoom };