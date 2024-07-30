import { useContext, useRef, useLayoutEffect } from 'react';
import { useMessages } from '../hooks/useMessages';
import { UserContext } from "../userContext";

function MessageList({ roomId }) {
    const userContext = useContext(UserContext);
    const containerRef = useRef(null);
    const messages = useMessages(roomId);

    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.user === userContext.userName}
                    />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }) {
    const { user, text } = message;
    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className="sender">{isOwnMessage ? 'You' : user}</h4>
            <div>{text}</div>
        </li>
    );
}

export { MessageList };