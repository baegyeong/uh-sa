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
  inputPeople();
  location.href = "../html/people_quiz_start.html";
}

function clickBalance() {
  inputBalance();
  location.href = "../html/balance_start.html";
}

function clickIntroduce() {
  location.href = "../html/more_game.html";
}

nextPeople.addEventListener("click", clickPeople);
nextBalance.addEventListener("click", clickBalance);
nextIntroduce.addEventListener("click", clickIntroduce);
