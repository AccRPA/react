import DisconnectButton from '../disconnect-button/DisconnectButton';
import ConnectedUsers from '../connected-users/ConnectedUsers';

function Game(){
    return <div>
            <p>Game!</p>
            <ConnectedUsers></ConnectedUsers>
            <DisconnectButton></DisconnectButton>
        </div>;
}

export default Game;