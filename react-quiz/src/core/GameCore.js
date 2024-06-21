export function GameCore() {
    this.questionNumber = 0;
    this.question = null;
    this.options = [];
    this.score = 0;
    this.partnerScore = 0;
    this.gameIsFinished = false;
    // the game finished normally or the partner or the user left the game
    this.gameFinishedReason = null;
};