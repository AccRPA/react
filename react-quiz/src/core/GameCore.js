function Question(){
    this.number = number;
    this.category = data.category;
    this.question = data.question;
    this.correctAnswer = data.correct_answer;
    this.incorrectAnswers = data.incorrect_answers;
}

export function GameCore() {
    this.questions = null; // Question
    this.score = 0;
    this.partnerScore = 0;
    this.gameIsFinished = false;
    // the game finished normally or the partner or the user left the game
    this.gameFinishedReason = null;
};
