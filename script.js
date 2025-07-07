// DarkMode Toggle:
const toggleBtn = document.getElementById("toggleTheme");

// Set initial theme to light mode by default
document.body.classList.add("light-mode");
document.body.classList.remove("dark-mode");
toggleBtn.textContent = "🌙 Dark Mode";

toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } 
  else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// QUiZ JS:
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function (answer) {
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function () {
  return this.currentQuestionIndex >= this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

let QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.showScores();
    } else {
      this.showQuestion();
      this.showChoices();
      this.showProgress();
    }
  },

  showQuestion: function () {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getCurrentQuestion().text;
  },

  showChoices: function () {
    let choices = quiz.getCurrentQuestion().choices;
    for (let i = 0; i < 4; i++) {
      let button = document.getElementById("btn" + i);
      if (button) {
        button.style.display = choices[i] ? "inline-block" : "none";
        button.innerHTML = choices[i] || "";
        button.onclick = () => {
          quiz.guess(choices[i]);
          this.displayNext();
        };
      }
    }
  },

  showProgress: function () {
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${quiz.currentQuestionIndex + 1} of ${
      quiz.questions.length
    }`;
  },

  showScores: function () {
    let scoreElement = document.getElementById("score");
    if (!scoreElement) {
      scoreElement = document.createElement("div");
      scoreElement.id = "score";
      document.body.appendChild(scoreElement);
    }
    scoreElement.innerHTML = `Your score is ${quiz.score} out of ${quiz.questions.length}`;
  },
};

// Create questions
let questions = [
  new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Madrid"],
    "Paris"
  ),
  new Question(
    "What is the largest planet in our solar system?",
    ["Earth", "Mars", "Jupiter", "Saturn"],
    "Jupiter"
  ),
  new Question(
    "Whom do u save first?",
    ["Mom", "Sister", "Lover", "Money"],
    "Mom"
  ),
  new Question(
    "What is the boiling point of water?",
    ["90°C", "100°C", "110°C", "120°C"],
    "100°C"
  ),
  new Question(
    "What is the chemical symbol for gold?",
    ["Au", "Ag", "Fe", "Hg"],
    "Au"
  ),
];

// Create a quiz
let quiz = new Quiz(questions);

// Display quiz
QuizUI.displayNext();


// to make button working  wrote this javascript using canvas, eventlistener & wrapper
document
        .getElementsByClassName("confetti-button")[0]
        .addEventListener("click", () => {
          let canvas = document.createElement("canvas");
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          let container = document.getElementsByClassName("button-wrapper")[0];
          container.appendChild(canvas);

          let myConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true,
          });

          myConfetti({
            particleCount:200,
            spread: 100,
            origin: { y: 0.6 },
          }).then(() => container.removeChild(canvas));
        });
