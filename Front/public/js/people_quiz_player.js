const bg = document.querySelector("#bg");
function clickBg() {
  location.href = "http://localhost:3000/close/sinseo/peoplequiz";
}
window.localStorage.removeItem("SCORE");
function localPlayer() {
  let player = JSON.parse(localStorage.getItem("PLAYER"));
  player = player + 1;
  JSON.stringify(JSON.parse(localStorage.getItem("PLAYER")));
  localStorage.setItem("PLAYER", JSON.stringify(player));
}
localPlayer();
bg.addEventListener("click", clickBg);
const player = document.querySelector("h1");
let num = localStorage.getItem("peopleNum");
let playerPlus = localStorage.getItem("PLAYER");
player.innerText = "player" + `${playerPlus}`;
