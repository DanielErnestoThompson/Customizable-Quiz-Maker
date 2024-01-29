import { Question } from './question';
import { Quiz } from './quiz';

// Sample questions
let questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
    new Question("What is the capital of France?", ["New York", "London", "Paris", "Dublin"], "Paris"),
    // Add more questions here
];

// Create a quiz
let quiz = new Quiz(questions);

// Display the question
function displayQuestion() {
    let questionElement = document.getElementById('question');
    let choicesElement = document.getElementById('choices');
    let submitButton = document.getElementById('submit');

    if (quiz.isEnded()) {
        showScores();
    } else if (questionElement && choicesElement && submitButton) {
        // Display question text
        questionElement.innerText = quiz.getCurrentQuestion().text;

        // Clear previous choices
        choicesElement.innerHTML = '';

        // Display choices as buttons
        quiz.getCurrentQuestion().choices.forEach(choice => {
            let button = document.createElement('button');
            button.innerText = choice;
            button.onclick = () => makeGuess(choice);
            // Use choicesElement with confidence it's not null
            choicesElement.appendChild(button);
        });

        // Show the submit button
        submitButton.style.display = 'block';
    }
}

// Process the guess and display next question
function makeGuess(choice: string) {
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

// Initialize quiz display
displayQuestion();
