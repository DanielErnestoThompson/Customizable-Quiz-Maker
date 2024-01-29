"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return choice === this.answer;
    }
}
exports.Question = Question;
