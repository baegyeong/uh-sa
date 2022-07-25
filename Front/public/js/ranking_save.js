const inputScore = document.querySelector(".total-score span");

const getScore = localStorage.getItem("SCORE");
console.log(getScore);
inputScore.innerText = getScore;

const username = document.querySelector("input").value;
const ranking = { category: "balance", username, getScore };

function saveName() {
  fetch("http://localhost:3000/close/api/users/:category", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(ranking), //객체 -> JSON
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(() => console.log("fetch 에러!"));
}

const saveButton = document.querySelector(".button:nth-child(1)");
const skipButton = document.querySelector(".button:nth-child(2)");

saveButton.addEventListener("click", saveName);
skipButton.addEventListener("click", () => {
  location.href = "http://localhost:3000/close/sinseo/player";
});
//function rankingName() {}
