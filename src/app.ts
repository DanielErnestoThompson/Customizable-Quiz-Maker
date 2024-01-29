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

// For testing, log the current question
console.log(quiz.getCurrentQuestion());
