import { socket } from '../../core/socket';

function DisconnectButton(){
    const disconnect = () => {
        socket.disconnect();
    }

    return <button className="flat text-pale" onClick={disconnect}>Disconnect</button>;
}

export default DisconnectButton;