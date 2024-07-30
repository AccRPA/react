import { chatRooms } from "../rooms";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../userContext";
import { User } from "./user";

function Lobby() {
    const userContext = useContext(UserContext);

    function handleDisconnect(){
        userContext.setUserName('');
    }

    return <div className="lobby">
            <div className="buttons-group">
                <User></User>
                <Link to="/" onClick={handleDisconnect}>Disconnect</Link>
            </div>
            <div className="lobby-content">
                <h2>Choose a Chat Room:</h2>
                <ul className="chat-room-list">
                    {chatRooms.map((room) => (
                        <li key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>;
}

export { Lobby };