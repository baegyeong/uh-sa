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

// 중복 없는 배열 만들기
let count = 36;
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
// 사진 띄우기
const image = document.createElement("img");
const quizImg = document.querySelector(".img");
quizImg.appendChild(image);
const quizName = document.querySelector(".name");
const answer = document.createElement("div");
quizName.appendChild(answer);

function getPic(num) {
  fetch("http://localhost:3000/close/api/sinseo")
    .then((res) => res.json())
    .then((data) => {
      image.src = data[num].image;
      answer.innerText = data[num].answer;
    })
    .catch(() => console.log("fetch 에러!"));
}
getPic(arr[num]);

// 키보드 방향키로 정답 입력 및 다음 퀴즈
let order = 0;
getPic(arr[0]);
let score = 0;
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    score += 1;
    console.log("left");
  }
  if (e.keyCode === 39) {
    console.log("right");
  }
  name.style.display = "none";
  answer.innerText = "";
  time = 2;
  sec = "";
  timer.innerText = "00" + ":0" + "3";
  setTime = setInterval(goTimeZero, 1000);
  if (order < 6) order++;
  getPic(arr[order]);
  if (order === 5) location.href = "http://localhost:3000/close/ranking_save";
  //console.log(order);
  console.log(score);
  localStorage.setItem("SCORE", score);
});
