const item = document.getElementsByClassName("item");
const itemNav = document.querySelector(".itemNav");
const peopleNum = localStorage.getItem("peopleNum");
const commonsenseNum = localStorage.getItem("commonsenseNum");
const tempCommon = localStorage.getItem("tempCommon");
const tempPeople = localStorage.getItem("tempPeople");

// 카테고리 표시 및 인원수 따라 랭킹 표시
let category;
if (
  document.location.href === "http://localhost:3000/close/users/commonsense"
) {
  category = "commonsense";
  for (let i = 0; i < tempCommon; i++) {
    item[i].classList.remove("hidden");
  }
  if (tempCommon > 3) {
    itemNav.classList.remove("hidden");
  }
} else if (
  document.location.href === "http://localhost:3000/close/users/sinseo"
) {
  category = "sinseo";
  for (let i = 0; i < tempPeople; i++) {
    item[i].classList.remove("hidden");
  }
  if (tempPeople > 3) {
    itemNav.classList.remove("hidden");
  }
}
const secondImg = document.querySelector(".second-img");
const firstImg = document.querySelector(".second-img");
const thirdImg = document.querySelector(".second-img");
const Img = document.getElementsByClassName("img");
const common = document.getElementsByClassName("common");
const nameLine = document.getElementsByClassName("name-line");
const scoreLine = document.getElementsByClassName("score-line");
const score = document.getElementsByClassName("score");
const name = document.getElementsByClassName("name");
const ranking = document.getElementsByClassName("ranking");

function writeRanking(obj) {
  let length = Object.keys(obj).length;
  let arr = [];

  for (let i = 3; i <= length; i++) {
    arr.push(i);
  }
  name[1].innerHTML = obj[0].username;
  name[0].innerHTML = obj[1].username;
  name[2].innerHTML = obj[2].username;

  score[1].innerHTML = obj[0].score;
  score[0].innerHTML = obj[1].score;
  score[2].innerHTML = obj[2].score;
  for (let name of arr) {
    ranking[name - 3].innerHTML = name + 1;
    nameLine[name - 3].innerHTML = obj[name].username;
    scoreLine[name - 3].innerHTML = obj[name].score;
    name++;
  }
}

function getRanking() {
  fetch(`http://localhost:3000/close/api/users/${category}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      writeRanking(data);
      return data;
    })
    .catch(() => console.log("fetch 에러!"));
}

getRanking();

// 이모지 랜덤 배치
const images = [
  "e-baby-chick.png",
  "e-bear.png",
  "e-chick.png",
  "e-dog.png",
  "e-koala.png",
  "e-monkey.png",
  "e-panda.png",
  "e-penguin.png",
  "e-rabbit.png",
  "e-tiger.png",
];

let num = Math.floor(Math.random() * images.length);
let arr = [];

function makeArr() {
  let i = 0;
  while (i < 10) {
    num = Math.floor(Math.random() * images.length);
    if (!sameNum(num)) {
      arr.push(num);
      i++;
    }
  }
  console.log(arr);
}
makeArr();

function sameNum(n) {
  for (var i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return true;
    }
  }
  return false;
}
const Image = document.getElementsByClassName("common");
for (let i = 0; i < 10; i++) {
  Image[i].src = `/img/${images[arr[i]]}`;
}
