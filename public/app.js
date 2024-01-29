"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = require("../src/question");
var quiz_1 = require("../src/quiz");
// Sample questions
var questions = [
    new question_1.Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
    new question_1.Question("What is the capital of France?", ["New York", "London", "Paris", "Dublin"], "Paris"),
    // Add more questions here
];
// Create a quiz
var quiz = new quiz_1.Quiz(questions);
// For testing, log the current question
console.log(quiz.getCurrentQuestion());
