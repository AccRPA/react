import { socket } from '../../core/socket';
import { BoxArrowRight } from 'react-bootstrap-icons';

function DisconnectButton(){
    const disconnect = () => {
        socket.disconnect();
    }

    return <button className="flat text-pale " onClick={disconnect} title="Disconnect">
            <BoxArrowRight className="show-lg"/>
            <span className="hide-xs hide-lg">Disconnect</span>
        </button>;
}

export default DisconnectButton;