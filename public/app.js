"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
const quiz_1 = require("./quiz");
// Sample questions
let questions = [
    new question_1.Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
    new question_1.Question("What is the capital of France?", ["New York", "London", "Paris", "Dublin"], "Paris"),
    // Add more questions here
];
// Create a quiz
let quiz = new quiz_1.Quiz(questions);
// Display the question
function displayQuestion() {
    let questionElement = document.getElementById('question');
    let choicesElement = document.getElementById('choices');
    let submitButton = document.getElementById('submit');
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // Ensure questionElement and submitButton are not null
        if (questionElement && submitButton) {
            questionElement.innerText = quiz.getCurrentQuestion().text;
            submitButton.style.display = 'block';
        }
        // Check choicesElement separately to satisfy TypeScript's strict null checking
        if (choicesElement) {
            choicesElement.innerHTML = '';
            quiz.getCurrentQuestion().choices.forEach(choice => {
                let button = document.createElement('button');
                button.innerText = choice;
                button.onclick = () => makeGuess(choice);
                choicesElement.appendChild(button);
            });
        }
    }
}
// Process the guess and display next question
function makeGuess(choice) {
    quiz.guess(choice);
    displayQuestion();
}
// Show the final score
function showScores() {
    let quizElement = document.getElementById('quiz');
    let resultElement = document.getElementById('result');
    if (quizElement && resultElement) {
        quizElement.style.display = 'none';
        resultElement.style.display = 'block';
        resultElement.innerHTML = `<h2>Your score: ${quiz.getScore()} out of ${questions.length}</h2>`;
    }
}
window.makeGuess = makeGuess;
// Initialize quiz display
displayQuestion();
