export class Question {
    constructor(public text: string, public choices: string[], public answer: string) {}

    isCorrectAnswer(choice: string) {
        return choice === this.answer;
    }
}
 