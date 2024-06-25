const gamesRoom = new Map();

function Game(roomId, player1, player2){
    this.roomId = roomId;
    this.player1 = player1;
    this.player2 = player2;
    this.questionNumber = 1;
    this.currentQuestion = null;
    this.answers = [];
    this.correctAnswers = [];
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
    if (!gamesRoom.has(roomId)){
        return gamesRoom.get(roomId);
    }
}

function getPlayer(roomId, playerId){
    const game = getGame(roomId);
    if (!!game){
        switch(playerId){
            case game.player1.id:
                return game.player1;
            case game.player2.id:
                return game.player2;
            default:
                null;
        }
    }
}

export const Games = {
    addGame: addGame,
    deleteGame: deleteGame,
    getGame: getGame,
    getPlayer: getPlayer,
};