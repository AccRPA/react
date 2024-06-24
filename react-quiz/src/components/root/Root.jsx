import { useContext, useEffect } from "react";
import { GameContext } from "../../core/GameContext";
import Login from "../login/Login";
import Match from "../match/Match";
import Game from "../game/Game";
import Result from "../result/Result";
import { socket } from '../../core/socket';
import { Player } from "../../core/Player";

function Root(){
    const gameContext = useContext(GameContext);

    useEffect(() => {
        function handleUsersConnected(data){
            gameContext.setGameData(previous => {
                return {
                    ...previous,
                    totalUsersConnected: data
                };
            });
        }

        function onMatchPartner(name, avatar){
            gameContext.setGameData(previous =>{
                const partnerData = new Player();
                partnerData.name = name;
                partnerData.avatar = avatar;
                return {
                    ...previous,
                    userIsPlaying: true,
                    partnerData: partnerData
                }
            });
        }

        function onPartnerDisconnected(){
            gameContext.setGameData(previous =>{
                return {
                    ...previous,
                    userIsPlaying: false,
                    partnerData: null
                }
            });
            socket.emit('leave_room');
        }
        
        socket.on('users_connected', handleUsersConnected);
        socket.on('partner_disconnected', onPartnerDisconnected);
        socket.on('match_partner', onMatchPartner);

        return () => {
            socket.off('users_connected', handleUsersConnected);
            socket.off('partner_disconnected', onPartnerDisconnected);
            socket.off('match_partner', onMatchPartner);
        };
    }, []);

    if (!gameContext.gameData.userIsConnected) {
        return <Login></Login>
    
    // the user is connected without playing
    } else if (!gameContext.gameData.userIsPlaying) {
        return <Match></Match>

    // the user is playing in a room with a partner or alone
    } else { 
        if (!gameContext.gameData.game.gameIsFinished){
            return <Game></Game>
        }else{
            return <Result></Result>
        }
    }
}

export default Root;