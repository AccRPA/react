import { useContext, useEffect } from "react";
import { GameContext } from "../../core/GameContext";
import Login from "../login/Login";
import Match from "../match/Match";
import Ready from "../ready/Ready";
import Game from "../game/Game";
import Result from "../result/Result";
import { socket } from '../../core/socket';
import { Player } from "../../core/Player";
import { GameData } from "../../core/GameData";

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

        function onDisconnect() {
            gameContext.setGameData(new GameData());
        }

        function onMatchPartner(name, avatar){
            gameContext.setGameData(previous =>{
                const partnerData = new Player();
                partnerData.name = name;
                partnerData.avatar = avatar;
                
                const gameData = {
                    ...previous,
                    partnerData: partnerData
                }
                gameData.game.gameFinishedReason = '';
                return gameData;
            });
        }

        
        function onUsersFree(usersFree){
            gameContext.setGameData(previous => {
                return {
                    ...previous,
                    totalUsersFree: usersFree
                }
            });
        }

        function onPartnerDisconnected(){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.gameFinishedReason = 'Your partner left the game';
                gameData.userIsPlaying = false;
                gameData.partnerData = null;
                return gameData;
            });
            socket.emit('leave_room_due_partner');
        }

        function onRoomLeft(){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.gameFinishedReason = 'You left the game';
                gameData.userIsPlaying = false;
                gameData.partnerData = null;
                return gameData;
            });
        }

        socket.on('users_connected', handleUsersConnected);
        socket.on('disconnect', onDisconnect);
        socket.on('match_partner', onMatchPartner);
        socket.on('users_free', onUsersFree);
        socket.on('partner_disconnected', onPartnerDisconnected);
        socket.on('room_left', onRoomLeft);

        return () => {
            socket.off('users_connected', handleUsersConnected);
            socket.off('disconnect', onDisconnect);
            socket.off('match_partner', onMatchPartner);
            socket.off('users_free', onUsersFree);
            socket.off('partner_disconnected', onPartnerDisconnected);
            socket.off('room_left', onRoomLeft);
        };
    }, []);

    if (!gameContext.gameData.userIsConnected) {
        return <Login></Login>
    
    // the user is connected without playing
    } else if (!gameContext.gameData.userIsPlaying) {
        if (!gameContext.gameData.partnerData){
            return <Match></Match>
        }else{
            return <Ready></Ready>
        }

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