// I need to write a multiple choice quiz with 5 questions about javascript that have 4 multiple choice answers to choose from

// I need to create a variable to hold the questions and answers

var questions = ["What is the correct syntax for referring to an external script?", "How do you write 'Hello World' in an alert box?", "How do you create a function in JavaScript?", "How do you call a function named 'foo'?", "How do you write a function that takes an argument and returns that argument?"];
var answers = ["<script src='app.js'></script>", "alert('Hello World')", "function myFunction()", "foo()", "myFunction(x) { return x; }"];
var correctAnswers = ["A", "B", "C", "D", "E"];

// I need to create a function to tally the score
function tallyScore() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        if (answer === correctAnswers[i]) {
            score++;
        }
    }
    return score;
};

// I need to create a timer for the quiz
function setTimer() {
    var timer = setInterval(function() {
        var timeLeft = 10;
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 4000);
};

// I need to create a function to start the quiz and timer
function startQuiz() {
    setTimer();
    tallyScore();
};

// I need to create a function to stop the quiz and timer after a set time period expires
function stopQuiz() {
    clearInterval(timer);
};

// I need to create a function to show the score at the end of the quiz
function showScore() {
    var score = tallyScore();
    alert("Your score is " + score + "!");
};

// I need to create a function to show the questions and answers
function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        if (answer === correctAnswers[i]) {
            score++;
        }
    }
};

// I need to create a function to show the correct answer
function showCorrectAnswer() {
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        if (answer !== correctAnswers[i]) {
            alert("The correct answer is " + correctAnswers[i] + "!");
        }
    }
};

// I need to create a function to check if the answer is correct
function checkAnswerRight() {
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        if (answer === correctAnswers[i]) {
            alert("Correct!");
        }
    }
};

// I need to create a function to check if the answer is incorrect
function checkAnswerWrong() {
    for (var i = 0; i < questions.length; i++) {
        var answer = prompt(questions[i]);
        if (answer !== correctAnswers[i]) {
            alert("Incorrect!");
        }
    }
};

// I need to create a function to save the scores to local storage with the player's initials
function saveScore() {
    var initials = prompt("Enter your initials.");
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
};

// I need to create a function to display the scores from local storage
function displayScore() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");
    alert("The high score is " + score + " by " + initials + "!");
};

// I need to create a function to clear the scores from local storage
function clearScore() {
    localStorage.clear();
};

// I need to create a function to display the question and 4 applicable multiple choice answers on the DOM
function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var question = document.createElement("p");
        var answerA = document.createElement("button");
        var answerB = document.createElement("button");
        var answerC = document.createElement("button");
        var answerD = document.createElement("button");
        question.textContent = questions[i];
        answerA.textContent = answers[i];
        answerB.textContent = answers[i];
        answerC.textContent = answers[i];
        answerD.textContent = answers[i];
        answerA.setAttribute("class", "answer");
        answerB.setAttribute("class", "answer");
        answerC.setAttribute("class", "answer");
        answerD.setAttribute("class", "answer");
        answerA.setAttribute("onclick", "checkAnswerRight()");
        answerB.setAttribute("onclick", "checkAnswerWrong()");
        answerC.setAttribute("onclick", "checkAnswerWrong()");
        answerD.setAttribute("onclick", "checkAnswerWrong()");
        questionContainer.appendChild(question);
        answerContainer.appendChild(answerA);
        answerContainer.appendChild(answerB);
        answerContainer.appendChild(answerC);
        answerContainer.appendChild(answerD);
        questionContainer.appendChild(answerContainer);
        answerContainer.appendChild(answerA);
        answerContainer.appendChild(answerB);
        answerContainer.appendChild(answerC);
        answerContainer.appendChild(answerD);
        questionContainer.appendChild(answerContainer);
        answerContainer.appendChild(answerA);
        answerContainer.appendChild(answerB);
        answerContainer.appendChild(answerC);
        answerContainer.appendChild(answerD);
        questionContainer.appendChild(answerContainer);
        answerContainer.appendChild(answerA);
        answerContainer.appendChild(answerB);
        answerContainer.appendChild(answerC);
        answerContainer.appendChild(answerD);
        questionContainer.appendChild(answerContainer);
        answerContainer.appendChild(answerA);
        answerContainer.appendChild(answerB);
        answerContainer.appendChild(answerC);
        answerContainer.appendChild(answerD);
    }
};