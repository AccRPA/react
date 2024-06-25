import { socket } from '../../core/socket';

function DisconnectButton(){
    const disconnect = () => {
        socket.disconnect();
    }

    return <button onClick={disconnect}>Disconnect</button>;
}

export default DisconnectButton;