"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = require("./question");
var quiz_1 = require("./quiz");
// Sample questions
var questions = [
    new question_1.Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
    new question_1.Question("What is the capital of France?", ["New York", "London", "Paris", "Dublin"], "Paris"),
    // Add more questions here
];
// Create a quiz
var quiz = new quiz_1.Quiz(questions);
// Display the question
function displayQuestion() {
    var questionElement = document.getElementById('question');
    var choicesElement = document.getElementById('choices');
    var submitButton = document.getElementById('submit');
    if (quiz.isEnded()) {
        showScores();
    }
    else if (questionElement && choicesElement && submitButton) {
        // Display question text
        questionElement.innerText = quiz.getCurrentQuestion().text;
        // Clear previous choices
        choicesElement.innerHTML = '';
        // Display choices as buttons
        quiz.getCurrentQuestion().choices.forEach(function (choice) {
            var button = document.createElement('button');
            button.innerText = choice;
            button.onclick = function () { return makeGuess(choice); };
            // Use choicesElement with confidence it's not null
            choicesElement.appendChild(button);
        });
        // Show the submit button
        submitButton.style.display = 'block';
    }
}
// Process the guess and display next question
function makeGuess(choice) {
    quiz.guess(choice);
    displayQuestion();
}
// Show the final score
function showScores() {
    var quizElement = document.getElementById('quiz');
    var resultElement = document.getElementById('result');
    if (quizElement && resultElement) {
        quizElement.style.display = 'none';
        resultElement.style.display = 'block';
        resultElement.innerHTML = "<h2>Your score: ".concat(quiz.getScore(), " out of ").concat(questions.length, "</h2>");
    }
}
// Initialize quiz display
displayQuestion();
