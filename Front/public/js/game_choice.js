const people = document.querySelector("#people");
const commonsense = document.querySelector("#commonsense");
const PEOPLE_KEY = "peopleNum";
const COMMONSENSE_NUM = "commonsenseNum";
function inputPeople() {
  const getPeople = localStorage.getItem(PEOPLE_KEY);
  localStorage.setItem("tempPeople", getPeople);
  localStorage.setItem(PEOPLE_KEY, people.value);
  const newPeople = localStorage.getItem(PEOPLE_KEY);
  const sumPeople = Number(getPeople) + Number(newPeople);
  localStorage.setItem("tempPeople", sumPeople);
}
function inputCommonsense() {
  const getCommon = localStorage.getItem(COMMONSENSE_NUM);
  localStorage.setItem("tempCommon", getCommon);
  localStorage.setItem(COMMONSENSE_NUM, commonsense.value);
  const newCommon = localStorage.getItem(COMMONSENSE_NUM);
  const sumCommon = Number(newCommon) + Number(getCommon);
  localStorage.setItem("tempCommon", sumCommon);
}

const nextPeople = document.querySelector("#go-people");
const nextCommonsense = document.querySelector("#go-commonsense");
const nextIntroduce = document.querySelector("#go-introduce");
let player = 0;
function clickPeople() {
  if (people.value !== "") {
    inputPeople();
    location.href = "http://localhost:3000/close/sinseo";
    localStorage.setItem("PLAYER", player);
  } else {
    alert("인원 수를 입력하세요.");
  }
}
function clickCommonsense() {
  if (commonsense.value !== "") {
    inputCommonsense();
    location.href = "http://localhost:3000/close/commonsense";
    localStorage.setItem("PLAYER", player);
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

window.localStorage.removeItem("arrayCommon");
window.localStorage.removeItem("arraySinseo");
