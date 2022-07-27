// 점수 표시
const inputScore = document.querySelector(".total-score span");
const getScore = localStorage.getItem("SCORE");
const PLAYER = localStorage.getItem("PLAYER");
const peopleNum = localStorage.getItem("peopleNum");
const commonsenseNum = localStorage.getItem("commonsenseNum");
console.log(getScore);
inputScore.innerText = getScore;

// 카테고리 표시
let category;
if (peopleNum) {
  category = "sinseo";
} else if (commonsenseNum) {
  category = "commonsense";
}
// post 요청
function saveName() {
  const username = document.querySelector("input").value;
  const ranking = {
    username,
    score: getScore,
  };
  console.log(ranking);
  fetch(`http://localhost:3000/close/api/users/${category}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ranking),
  })
    .then((result) => {
      console.log(result);
    })

    .catch(() => console.log("fetch 에러!"));
}
// 인물퀴즈
function Sinseo() {
  if (category === "peoplequiz") {
    if (peopleNum !== 0 && PLAYER < peopleNum) {
      location.href = "http://localhost:3000/close/sinseo/player";
    } else if (peopleNum !== 0 && PLAYER === peopleNum) {
      location.href = `http://localhost:3000/close/users/sinseo`;
    }
  }
}

// 상식퀴즈
function Commonsense() {
  if (category === "commonsense") {
    if (peopleNum !== 0 && PLAYER < commonsenseNum) {
      location.href = "http://localhost:3000/close/commonsense/player";
    } else if (commonsenseNum !== 0 && PLAYER === commonsenseNum) {
      location.href = `http://localhost:3000/close/users/commonsense`;
    }
  }
}

// 저장, 건너뛰기 버튼
const saveButton = document.querySelector(".button:nth-child(1)");
const skipButton = document.querySelector(".button:nth-child(2)");

saveButton.addEventListener("click", () => {
  saveName();
  Sinseo();
  Commonsense();
});
skipButton.addEventListener("click", () => {
  showRanking();
  Sinseo();
  Commonsense();
});
