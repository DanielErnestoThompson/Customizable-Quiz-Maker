"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    Question.prototype.isCorrectAnswer = function (choice) {
        return choice === this.answer;
    };
    return Question;
}());
exports.Question = Question;
