"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.questionIndex];
    };
    Quiz.prototype.guess = function (answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    };
    Quiz.prototype.isEnded = function () {
        return this.questionIndex === this.questions.length;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    return Quiz;
}());
exports.Quiz = Quiz;
