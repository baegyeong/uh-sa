const name = document.querySelector(".name");

let answer = setTimeout(function () {
  name.style.display = "flex";
}, 3000);

const timer = document.querySelector("#Timer");

let time = 2;
let sec = "";
timer.innerText = "00" + ":0" + "3";
let setTime = setInterval(function () {
  sec = time;
  timer.innerText = "00" + ":0" + sec;
  time--;
}, 1000);

setTimeout(function () {
  clearInterval(setTime);
}, 3000);

const Stop = document.querySelector(".stop");

function clickBtn(event) {
  event.preventDefault();
  clearInterval(setTime);
  clearInterval(answer);
}
Stop.addEventListener("click", clickBtn);
