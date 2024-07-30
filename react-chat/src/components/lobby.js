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

    return <>
            <User></User>
            <h2>Choose a Chat Room for: {userContext.userName}</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/" onClick={handleDisconnect}>Disconnect</Link>
        </>;
}

export { Lobby };