const people = document.querySelector("#people");
const balance = document.querySelector("#balance");
const PEOPLE_KEY = "peopleNum";

function inputPeople(event) {
  const peopleNum = people.value;
  localStorage.setItem(PEOPLE_KEY, peopleNum);
}

const nextPeople = document.querySelector("#goPeople");
const nextBalance = document.querySelector("#goBalance");
const nextIntroduce = document.querySelector("#goIntroduce");

function clickPeople() {
  location.href = "../peopleQuiz/peopleQuiz_start/peopleQuiz_start.html";
  inputPeople();
}
function clickBalance() {
  location.href = "../balance/balance_start/balance_start.html";
  inputPeople();
}
function clickIntroduce() {
  location.href = "../moreGame/moreGame.html";
  inputPeople();
}

nextPeople.addEventListener("click", clickPeople);
nextBalance.addEventListener("click", clickBalance);
nextIntroduce.addEventListener("click", clickIntroduce);
