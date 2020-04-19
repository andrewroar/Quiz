let score = 0;
let questionCounter = 0;

let start = document.getElementById("start");
let next = document.getElementById("next");
let timer = document.querySelector(".timer");
let question = document.getElementById("questionHeader");
let answer1 = document.getElementById("a");
let answer2 = document.getElementById("b");
let answer3 = document.getElementById("c");
let answer4 = document.getElementById("d");
const answerAll = document.querySelectorAll(".answer");
let hidden = document.querySelector(".hide");
let questionBox = document.getElementById("question container");
let scoreBoard = document.getElementById("scoreBoard");
let player = document.getElementById("player");
let saveScore = document.getElementById("saveScore");

////////////Timer///////////

let secondsLeft = 45;
let timeInterval;

function callbackTimer() {
  secondsLeft--;
  timer.textContent = secondsLeft + " seconds left till colorsplosion.";

  if (secondsLeft <= 0) {
    clearInterval(timerInterval);
    toScoreBoard();
  }
}

function setTime() {
  timerInterval = setInterval(callbackTimer, 1000);
}

////////////Questions////////
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "ESLint",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which song from Radiohead which the band famous for refusing to sing?",
    answers: {
      a: "Creep",
      b: "No Surprises",
      c: "Karma Police",
      d: "Paranoid Android",
    },
    correctAnswer: "a",
  },
  {
    question: "Which band wrote the song 'Blackhole Sun' ?",
    answers: {
      a: "Greenday",
      b: "Soundgarden",
      c: "Led Zeppelin",
      d: "AC/DC",
    },
    correctAnswer: "b",
  },
  {
    question: "Who is the first post-WWII UK prime minister?",
    answers: {
      a: "Winson Churchill",
      b: "Arthur Scargil",
      c: "Anthony Eden",
      d: "Clement Attlee",
    },
    correctAnswer: "d",
  },

  {
    question: "Edward I of England, also known as:",
    answers: {
      a: "The Great",
      b: "The Black Prince",
      c: "The Longshanks",
      d: "The Confessor",
    },
    correctAnswer: "c",
  },
];
/////////This function set print the question and the answer to the game/////
function displayQuestion() {
  question.innerHTML = myQuestions[questionCounter].question;
  answer1.textContent = myQuestions[questionCounter].answers.a;
  answer2.textContent = myQuestions[questionCounter].answers.b;
  answer3.textContent = myQuestions[questionCounter].answers.c;
  answer4.textContent = myQuestions[questionCounter].answers.d;
  //answerAll.forEach((i) => (i.disabled = false));

  return;
}

displayQuestion();

/////////////Start game, Next game and to the Score Board///////
function startGame() {
  timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  setTime();

  hidden.style.display = "block";
  next.style.display = "block";
  start.style.display = "none";
  console.log("bye");
}

function toScoreBoard() {
  clearInterval(timerInterval);
  timer.textContent = " ";
  next.style.display = "none";
  questionBox.style.display = "none";
  scoreBoard.style.display = "block";
}

function nextGame() {
  if (questionCounter < myQuestions.length - 1) {
    questionCounter += 1;
    console.log("you have selected next " + questionCounter);
    displayQuestion();
    answerAll.forEach((i) => (i.disabled = false));
    answerAll.forEach((i) => (i.style.backgroundColor = "#e7e7e7"));

    return questionCounter;
  } else {
    toScoreBoard();
  }
}
//////////////////Answer Process///////////////////////
function selectAnswer1() {
  console.log("you have selected an answer");
  if (myQuestions[questionCounter].correctAnswer == "a") {
    console.log("You are right!!");
    score += 1;
    answer1.style.backgroundColor = "#00ff00";
    answerAll.forEach((i) => (i.disabled = true));

    return score;
  } else {
    console.log("You are wrong!!");
    answer1.style.backgroundColor = "#f44336";
    secondsLeft -= 5;
    timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  }
}

function selectAnswer2() {
  console.log("you have selected an answer");
  if (myQuestions[questionCounter].correctAnswer == "b") {
    console.log("You are right!!");
    score += 1;
    answer2.style.backgroundColor = "#00ff00";
    answerAll.forEach((i) => (i.disabled = true));

    return score;
  } else {
    console.log("You are wrong!!");
    answer2.style.backgroundColor = "#f44336";
    secondsLeft -= 5;
    timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  }
}

function selectAnswer3() {
  console.log("you have selected an answer");
  if (myQuestions[questionCounter].correctAnswer == "c") {
    console.log("You are right!!");
    score += 1;
    answer3.style.backgroundColor = "#00ff00";
    answerAll.forEach((i) => (i.disabled = true));
    return score;
  } else {
    console.log("You are wrong!!");
    answer3.style.backgroundColor = "#f44336";
    secondsLeft -= 5;
    timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  }
}

function selectAnswer4() {
  console.log("you have selected an answer");
  if (myQuestions[questionCounter].correctAnswer == "d") {
    console.log("You are right!!");
    score += 1;
    answer4.style.backgroundColor = "#00ff00";
    answerAll.forEach((i) => (i.disabled = true));

    return score;
  } else {
    console.log("You are wrong!!");
    answer4.style.backgroundColor = "#f44336";
    secondsLeft -= 5;
    timer.textContent = secondsLeft + " seconds left till colorsplosion.";
  }
}

////////////Storage/////////////

function isStorage() {
  event.preventDefault();
  let storageLen = localStorage.length;

  siteData = {
    siteName: player.value,
    siteScore: score,
  };

  localStorage.setItem("Score" + storageLen, JSON.stringify(siteData));
  saveScore.disabled = true;

  for (var i = 0; i < localStorage.length; i++) {
    let li = document.createElement("li");
    let ul = document.getElementById("leaderboard");
    let storageAll = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(storageAll);
    li.appendChild(
      document.createTextNode(
        storageAll.siteName + " has scored " + storageAll.siteScore
      )
    );
    ul.appendChild(li);
  }
}

//////////////////

start.addEventListener("click", startGame);
next.addEventListener("click", nextGame);
answer1.addEventListener("click", selectAnswer1);
answer2.addEventListener("click", selectAnswer2);
answer3.addEventListener("click", selectAnswer3);
answer4.addEventListener("click", selectAnswer4);
saveScore.addEventListener("click", isStorage);
