import { Question } from './question';

export class Quiz {
    private score: number = 0;
    private questionIndex: number = 0;

    constructor(public questions: Question[]) {}

    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    guess(answer: string) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

    getScore() {
        return this.score;
    }
}
