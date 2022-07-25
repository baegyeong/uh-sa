// 타이머
const timer = document.querySelector("#Timer");
let time = 9;
let sec = "";
timer.innerText = "00" + ":" + "10";
let goTimeZero = function () {
  if (time > -1) {
    sec = time;
    timer.innerText = "00" + ":0" + sec;
    time--;
  }
  if (time === -1) {
    clearInterval(setTime);
    incorrect.classList.remove("hidden");
    setTimeout(function () {
      clearInterval(incorrect.classList.add("hidden"));
    }, 500);
    order++;
    getQuestion(arr[order]);
  }
};
let setTime = setInterval(goTimeZero, 1000);

const next = document.querySelector("#next");
const people = localStorage.getItem("commonsenseNum");
const question = document.createElement("div");
const choice1 = document.createElement("div");
const choice2 = document.createElement("div");
const quiz = document.querySelector(".question");
const choiceLeft = document.querySelector(".choice:nth-child(2)");
const choiceRight = document.querySelector(".choice:nth-child(3)");
quiz.appendChild(question);
choiceLeft.appendChild(choice1);
choiceRight.appendChild(choice2);

const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");

function getQuestion(num) {
  fetch("http://localhost:3000/close/api/commonsense")
    .then((res) => res.json())
    .then((data) => {
      nextQuiz(data, num);
      return data;
    })
    .catch(() => console.log("fetch 에러!"));
}
let score = 0;
// 왼쪽 선택지가 정답일 때
function compareLeft(num) {
  fetch("http://localhost:3000/close/api/commonsense")
    .then((res) => res.json())
    .then((data) => {
      if (data[num].answer === data[num].choice1) {
        score += 1;
        setTimeout(correct.classList.remove("hidden"), 250);
        setTimeout(function () {
          clearInterval(correct.classList.add("hidden"));
        }, 500);
      } else {
        setTimeout(incorrect.classList.remove("hidden"), 250);
        setTimeout(function () {
          clearInterval(incorrect.classList.add("hidden"));
        }, 500);
      }
      return data;
    })
    .catch(() => console.log("fetch 에러!"));
}

// 오른쪽 선택지가 정답일 때
function compareRight(num) {
  fetch("http://localhost:3000/close/api/commonsense")
    .then((res) => res.json())
    .then((data) => {
      if (data[num].answer === data[num].choice2) {
        score += 1;
        setTimeout(correct.classList.remove("hidden"), 250);
        setTimeout(function () {
          clearInterval(correct.classList.add("hidden"));
        }, 500);
      } else {
        setTimeout(incorrect.classList.remove("hidden"), 250);
        setTimeout(function () {
          clearInterval(incorrect.classList.add("hidden"));
        }, 500);
      }
      return data;
    })
    .catch(() => console.log("fetch 에러!"));
}

// 퀴즈 질문, 선택지 출력
function nextQuiz(obj, num) {
  question.innerText = obj[num].quiz;
  choice1.innerText = obj[num].choice1;
  choice2.innerText = obj[num].choice2;
}

// 중복 없는 배열 만들기
let count = 30;
let num = Math.floor(Math.random() * count);
let arr = [];

function makeArr() {
  let i = 0;
  while (i < 5) {
    num = Math.floor(Math.random() * count);
    if (!sameNum(num)) {
      arr.push(num);
      i++;
    }
  }
  console.log(arr);
}
makeArr();

function sameNum(n) {
  for (var i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return true;
    }
  }
  return false;
}

// 키보드 방향키로 정답 입력 및 다음 퀴즈
let order = 0;
getQuestion(arr[0]);

window.addEventListener("keydown", (e) => {
  clearInterval(setTime);
  if (e.keyCode === 37) {
    compareLeft(arr[order]);
    console.log("left");
  }
  if (e.keyCode === 39) {
    compareRight(arr[order]);
    console.log("right");
  }
  if (order < 6) order++;
  getQuestion(arr[order]);
  time = 9;
  sec = "";
  timer.innerText = "00" + ":" + "10";
  setTime = setInterval(function () {
    sec = time;
    timer.innerText = "00" + ":0" + sec;
    time--;
  }, 1000);

  if (order === 5) location.href = "http://localhost:3000/close/ranking_save";
  //console.log(order);
  console.log(score);
  localStorage.setItem("SCORE", score);
});
