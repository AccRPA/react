export function GameCore() {
    this.questions = null;
    this.questionNumber = 0;
    this.score = 0;
    this.partnerScore = 0;
    this.gameIsFinished = false;
    // the game finished normally or the partner or the user left the game
    this.gameFinishedReason = null;

    this.getQuestion = function(){
        return this.questions[this.questionNumber];
    }
};
