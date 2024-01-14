const questions = [
    {
        question: "What is the correct syntax for referring to an external script?",
        options: ["<script src='app.js'></script>", "script src='app.js'", "script href='app.js'", "script name='app.js'"],
        correctAnswer: "<script src='app.js'></script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')"],
        correctAnswer: "alert('Hello World')"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function myFunction"],
        correctAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'foo'?",
        options: ["foo()", "call foo()", "foo call()", "foo(whoFlung)"],
        correctAnswer: "foo()"
    },
    {        
        question: "How do you write a function that takes an argument and returns that argument?",
        options: ["function myFunction(x) { return x; }", "function myFunction = x => x;", "function myFunction(x) { x; }", "function myFunction(x) { return x; }"],
        correctAnswer: "function myFunction(x) { return x; }"
    },
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score-display");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const currentQuestionData = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestionData.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswerRight(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswerRight(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === currentQuestion.options[selectedIndex]) {
        score++;
    }
    scoreDisplay.textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Completed! Your final score is " + score);
    }
}

nextButton.addEventListener("click", nextQuestion);

showQuestion();