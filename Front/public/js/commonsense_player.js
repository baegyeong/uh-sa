const bg = document.querySelector("#bg");
function clickBg() {
  location.href = "http://localhost:3000/close/commonsense/quiz";
}

bg.addEventListener("click", clickBg);
const player = document.querySelector("h1");
let num = localStorage.getItem("commonsenseNum");
let i = 0;
window.addEventListener("load", () => {
  i++;
  player.innerText = "player" + `${i}`;
});
