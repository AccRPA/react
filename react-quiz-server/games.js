const gamesRoom = new Map();

function Game(roomId, player1, player2){
    this.roomId = roomId;
    this.player1 = player1;
    this.player2 = player2;
    this.questionNumber = 1;
    this.currentQuestion = null;
    this.answers = [];
    this.correctAnswers = [];

    this.getPlayer = function(playerId){        
        switch(playerId){
            case this.player1.id:
                return this.player1;
            case this.player2.id:
                return this.player2;
            default:
                null;
        }
    }
}

function addGame(roomId, player1, player2){
    if (!gamesRoom.has(roomId)){
        gamesRoom.set(roomId, new Game(roomId, player1, player2));
    }
}

function deleteGame(roomId){
    if (!!gamesRoom.has(roomId)){
        gamesRoom.delete(roomId);
    }
}

function getGame(roomId){
    if (!!gamesRoom.has(roomId)){
        return gamesRoom.get(roomId);
    }
}

function getGames(){
    return gamesRoom;
}


export const Games = {
    addGame: addGame,
    deleteGame: deleteGame,
    getGame: getGame,
    getGames: getGames
};