var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Nandini",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
  {
    name: "Shipra",
    score: 1,
  },
];
var questions = [
  {
    question: "What's the full and original name of Captain America?",
    answer: "Steve Rogers",
  },
  {
    question: "What's Thor's hammer called?",
    answer: "Mjolnir",
  },
  {
    question: "Do you know what's Spiderman's real name?",
    answer: "Peter Parker",
  },
];
function userInfo() {
  var userName = readlineSync.question("What's your name? ");

  console.log(
    "Welcome " + userName + "let's see if you know Marvel Cinematic Universe"
  );
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("Your Score: ", score);

  console.log("Check out the high scores");

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

userInfo();
game();
showScores();
