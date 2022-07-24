const people = document.querySelector("#people");
const balance = document.querySelector("#commonsense");
const PEOPLE_KEY = "peopleNum";
const COMMONSENSE_NUM = "commonsenseNum";

window.localStorage.clear();
function inputPeople() {
  localStorage.setItem(PEOPLE_KEY, people.value);
}
function inputCommonsense() {
  localStorage.setItem(COMMONSENSE_NUM, commonsense.value);
}

const nextPeople = document.querySelector("#go-people");
const nextCommonsense = document.querySelector("#go-commonsense");
const nextIntroduce = document.querySelector("#go-introduce");

function clickPeople() {
  if (people.value !== "") {
    inputPeople();
    location.href = "http://localhost:3000/close/sinseo";
  } else {
    alert("인원 수를 입력하세요.");
  }
}
function clickCommonsense() {
  if (commonsense.value !== "") {
    inputCommonsense();
    location.href = "http://localhost:3000/close/commonsense";
  } else {
    alert("인원 수를 입력하세요.");
  }
}
function clickIntroduce() {
  location.href = "http://localhost:3000/close/moregame";
}

nextPeople.addEventListener("click", clickPeople);
nextCommonsense.addEventListener("click", clickCommonsense);
nextIntroduce.addEventListener("click", clickIntroduce);
