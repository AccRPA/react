import React from 'react';
import { sendMessage } from '../services/firebase';
import { useContext } from "react";
import { UserContext } from "../userContext";

function MessageInput({ roomId }) {
    const userContext = useContext(UserContext);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(roomId, userContext.userName, value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className="message-input"
                required
                minLength={1}
            />
            <button type="submit" disabled={value < 1}>
                Send
            </button>
        </form>
    );
}
export { MessageInput };