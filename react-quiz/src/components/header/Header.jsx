import './Header.css';
import DisconnectButton from "../disconnect-button/DisconnectButton";
import LeaveRoom from "../leave-room/LeaveRoom";
import AppTitle from "../app-title/AppTitle";
import FreeUsers from '../free-users/FreeUsers';
import ConnectedUsers from '../connected-users/ConnectedUsers';

export default function Header({showConnections, showTitle, showLeaveButton, switchLeaveButtonToReplay, showDisconnectButton}) {
    return <div className="header">        
            <div className='connections'>
                {showConnections && <>
                    <FreeUsers></FreeUsers>
                    <span className="show-lg">/</span>
                    <ConnectedUsers></ConnectedUsers>            
                </>
                }
            </div>

            <div className='title'>
                {showTitle && <AppTitle></AppTitle>}
            </div>

            <div className='leave'>
                {showLeaveButton && <LeaveRoom replayButton={switchLeaveButtonToReplay}></LeaveRoom>}
                {showDisconnectButton && <DisconnectButton></DisconnectButton>}
            </div>
        </div>;
}