const questions = [
    {
        question: "What is the correct syntax for referring to an external script?",
        options: ["script src='app.js'", "<script src='app.js'></script>", "script href='app.js'", "script name='app.js'"],
        correctAnswer: "<script src='app.js'></script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "shmalert(alert('Hello World'))"],
        correctAnswer: "alert('Hello World')"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "myFunction"],
        correctAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'foo'?",
        options: ["foo(whoFlung)", "call foo()", "foo()", "foo call()"],
        correctAnswer: "foo()"
    },
    {        
        question: "How do you write a function that takes an argument and returns that argument?",
        options: ["function myFunction(x) { return x; }", "function myFunction = x => x;", "function myFunction(x) { x; }", "function myFunction(x) { return x; }"],
        correctAnswer: "function myFunction(x) { return x; }"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

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

const timerDisplay = document.getElementById("timer-display");
let timeRemaining = 300;

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = minutes + ":" + seconds;
}

function startTimer() {
    const timeInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timeInterval);
            alert("Time's up! Quiz completed!");
        }
    }, 1000);
}

startTimer();
showQuestion();