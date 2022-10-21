var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Lisa",
    score: 7,
  },

  {
    name: "Akash",
    score: 6,
  },
  {
    name: "Shipra",
    score: 1,
  },
];

var questions = [
  {
    question: "Who is the author of the novel 'It ends with us'?",
    answer: "Colleen Hoover",
  },
  {
    question: "Which fiction book has character named 'Alex Volkov'?",
    answer: "Twisted Love",
  },
  {
    question:
      "What is the name of the protagonist of the novel 'The book lovers' by author Emily henry?",
    answer: "Nora Stephens",
  },
  {
    question: "Who is the author of 'The Book of Answers'?",
    answer: "Carol Bolt",
  },
  {
    question:
      "when did the novel 'Love Hypothesis' by author Ali Hazelwood come out?",
    answer: "21 October 2021",
  },
  {
    question: "How my novels are there in the 'Shatter me' series?",
    answer: "11",
  },
  {
    question:
      "Who is the author of the poetry collection book 'Milk and Honey'?",
    answer: "Rupi Kaur",
  },
];

function userInfo() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " let's see if you know about books");
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
  console.log("Your score: ", score);

  console.log("Check out the high scores");

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

userInfo();
game();
showScores();
