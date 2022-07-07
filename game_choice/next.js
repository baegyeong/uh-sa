const people = document.querySelector("#people");
const balance = document.querySelector("#balance");
const PEOPLE_KEY = "peopleNum";
const BALANCE_NUM = "balanceNum";

function inputPeople() {
  const peopleNum = people.value;
  localStorage.setItem(PEOPLE_KEY, peopleNum);
}
function inputBalance() {
  const balanceNum = balance.value;
  localStorage.setItem(BALANCE_NUM, balanceNum);
}

const nextPeople = document.querySelector("#goPeople");
const nextBalance = document.querySelector("#goBalance");
const nextIntroduce = document.querySelector("#goIntroduce");

function clickPeople() {
  location.href = "../people_quiz/people_quiz_start/people_quiz_start.html";
  inputPeople();
}
function clickBalance() {
  location.href = "../balance/balance_start/balance_start.html";
  inputBalance();
}
function clickIntroduce() {
  location.href = "../more_game/more_game.html";
}

nextPeople.addEventListener("click", clickPeople);
nextBalance.addEventListener("click", clickBalance);
nextIntroduce.addEventListener("click", clickIntroduce);
