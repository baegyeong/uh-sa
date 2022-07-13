const timer = document.querySelector("#Timer");

let time = 9;
let sec = "";
timer.innerText = "00" + ":" + "10";
let setTime = setInterval(function () {
  sec = time;
  timer.innerText = "00" + ":0" + sec;
  time--;
}, 1000);

setTimeout(function () {
  clearInterval(setTime);
}, 10000);
