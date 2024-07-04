import { Question } from './question.js';

const gamesRoom = new Map();

function Game(roomId, player1, player2){
    this.roomId = roomId;
    this.player1 = player1;
    this.player2 = player2;
    this.questions = null;
    this.questionNumber = 0;

    // save all the player1 and player2 answers and if they are valid.

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

    this.setGameQuestions = function(questions){
        if (!this.questions){
            this.questions = [];
        }
        
        let index = 0;
        for (let q of questions.results){
            this.questions.push(new Question(q, ++index));
        }
    }

    this.isValidAnswer = function(answer){
        return !!answer && this.getCorrectAnswer() === answer;
    }

    this.getCorrectAnswer = function(){
        return this.questions[this.questionNumber].correctAnswer;
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

function getAllGames(){
    return gamesRoom;
}

export const Games = {
    addGame: addGame,
    deleteGame: deleteGame,
    getGame: getGame,
    getAllGames: getAllGames
};