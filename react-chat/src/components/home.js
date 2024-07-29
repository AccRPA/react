import { chatRooms } from "../rooms";
import { Link } from 'react-router-dom';

function Home() {
    return <>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
        </>;
}

export { Home };