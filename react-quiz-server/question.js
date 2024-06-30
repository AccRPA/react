export function Question(data, number){
    this.number = number;
    this.category = data.category;
    this.question = data.question;
    this.correctAnswer = data.correct_answer;
    this.incorrectAnswers = data.incorrect_answers;
}