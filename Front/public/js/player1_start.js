const bg = document.querySelector("#bg");
function clickBg() {
  location.href = "http://localhost:3000/close/sinseo/peoplequiz";
}

bg.addEventListener("click", clickBg);
const player = document.querySelector("h1");
let num = localStorage.getItem("peopleNum");
let i = 1;
window.addEventListener("load", () => {
  player.innerText = "player" + `${i}`;
  i++;
});
