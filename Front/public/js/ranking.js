const item = document.getElementsByClassName("item");
const itemNav = document.querySelector(".itemNav");
const peopleNum = localStorage.getItem("peopleNum");
const commonsenseNum = localStorage.getItem("commonsenseNum");
for (let i = 0; i < peopleNum; i++) {
  item[i].classList.remove("hidden");
}
for (let i = 0; i < commonsenseNum; i++) {
  item[i].classList.remove("hidden");
}
if (peopleNum > 3) {
  itemNav.classList.remove("hidden");
} else if (commonsenseNum > 3) {
  itemNav.classList.remove("hidden");
}
// 카테고리 표시
let category;
if (peopleNum) {
  category = "sinseo";
} else if (commonsenseNum) {
  category = "commonsense";
}
const winner = document.querySelector("#winner");
const writeRanking = document.createElement("div");
winner.appendChild(writeRanking);

function Ranking() {
  fetch(`http://localhost:3000/close/api/users/${category}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => console.log("fetch 에러!"));
}
Ranking();
