const timer = document.querySelector("#Timer");
const name = document.querySelector(".name");
const Stop = document.querySelector(".stop");

// 타이머 설정 및 0초 시 정답 띄우기
let time = 2;
let sec = "";
timer.innerText = "00" + ":0" + "3";

let goTimeZero = function () {
  if (time > -1) {
    sec = time;
    timer.innerText = "00" + ":0" + sec;
    time--;
  }
  if (time === -1) {
    name.style.display = "flex";
    clearInterval(setTime);
  }
};
// 정답 이름 가져오기
function answer() {
  fetch("http://localhost:3000/close/api/sinseo")
    .then((res) => res.json())
    .then((data) => {
      const quizName = document.querySelector(".name");
      const answer = document.createElement("div");
      quizName.appendChild(answer);
      answer.innerText = data[num].answer;
    })
    .catch(() => console.log("fetch 에러!"));
}
if (time === -1) {
  answer();
}
let setTime = setInterval(goTimeZero, 1000);

// stop 버튼을 통해 타이머, 정답화면 제어
function clickBtn() {
  if (Stop.innerText === "STOP") {
    event.preventDefault();
    clearInterval(setTime);
    Stop.innerText = "PLAY";
    Stop.style.color = "#008bff";
  } else {
    setTime = setInterval(goTimeZero, 1000);
    Stop.innerText = "STOP";
    Stop.style.color = "red";
  }
}

Stop.addEventListener("click", clickBtn);

// 사진 띄우기
let count = 30;

let num = Math.floor(Math.random() * count);
const image = document.createElement("img");
const quizImg = document.querySelector(".img");

function getPic(num) {
  fetch("http://localhost:3000/close/api/sinseo")
    .then((res) => res.json())
    .then((data) => {
      image.src = data[num].image;
      quizImg.appendChild(image);
    })
    .catch(() => console.log("fetch 에러!"));
}
getPic(num);
//image.id = "peopleQuizImg";

// 키보드 방향키로 정답 입력 및 다음 퀴즈
let score = 0;

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode === 37) {
    console.log("left");
    score += 1;
    localStorage.setItem("SCORE", score);
  }
  if (e.keyCode === 39) {
    console.log("right");
  }
  num = Math.floor(Math.random() * count);
  name.style.display = "none";
  getPic(num);
  answer.innerText = "";
  time = 2;
  sec = "";
  timer.innerText = "00" + ":0" + "3";
  setInterval(goTimeZero, 1000);
  // answer.innerHTML = none;
}
