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
import { GameCore } from "../../core/GameCore";

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

        function onMatchPartner(id, name, avatar){
            socket.emit('set_partner', id);
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
            resetGame('Your partner left the game');
            socket.emit('leave_room_due_partner');

        }

        function onRoomLeft(){
            resetGame('You left the game');
        }

        function resetGame(message){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game = new GameCore();
                gameData.game.gameFinishedReason = message;
                gameData.userIsPlaying = false;
                gameData.partnerData = null;
                gameData.userData = {
                    ...gameData.userData, 
                    ready: false
                };
                return gameData;
            });
        }

        function onGameStart(questions){
            function shuffleArray(answers){
                const temp = [...answers];
                for(let i = 0; i < temp.length; i++){
                    const random = Math.floor(Math.random() * temp.length);
                    [temp[i], temp[random]] = [temp[random], temp[i]];
                }
                return temp;
            }

            questions = questions.map(q => {
                return {
                    ...q,
                    answers: shuffleArray(q.answers)
                }
            });
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.userIsPlaying = true;
                gameData.game.questions = questions;
                return gameData;
            });
        }

        function onGameFinish(){
            gameContext.setGameData(previous => {
                const gameData = {...previous};
                gameData.game.gameIsFinished  = true;                
                return gameData;
            });
            socket.emit('game_result_request');
        }

        socket.on('users_connected', handleUsersConnected);
        socket.on('disconnect', onDisconnect);
        socket.on('match_partner', onMatchPartner);
        socket.on('users_free', onUsersFree);
        socket.on('partner_disconnected', onPartnerDisconnected);
        socket.on('room_left', onRoomLeft);
        socket.on('game_data', onGameStart);
        socket.on('game_finished', onGameFinish);

        return () => {
            socket.off('users_connected', handleUsersConnected);
            socket.off('disconnect', onDisconnect);
            socket.off('match_partner', onMatchPartner);
            socket.off('users_free', onUsersFree);
            socket.off('partner_disconnected', onPartnerDisconnected);
            socket.off('room_left', onRoomLeft);
            socket.off('game_data', onGameStart);
            socket.off('game_finished', onGameFinish);
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