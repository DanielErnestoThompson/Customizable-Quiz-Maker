"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
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
exports.Quiz = Quiz;
