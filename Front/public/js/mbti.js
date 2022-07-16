const next = document.querySelector("#next");
//const people = localStorage.getItem(peopleNum);
const number = Math.floor(Math.random() * 7);

const question = document.createElement("div");
const choice1 = document.createElement("div");
const choice2 = document.createElement("div");
const quiz = document.querySelector(".question");
const choiceLeft = document.querySelector(".choice:nth-child(2)");
const choiceRight = document.querySelector(".choice:nth-child(3)");
const explain = document.querySelector(".comment");
quiz.appendChild(question);
choiceLeft.appendChild(choice1);
choiceRight.appendChild(choice2);

async function getQuestion() {
  const config = {
    method: "get",
  };

  await fetch("http://localhost:3000/app/api/know", config)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("fetch 에러!"));
}
console.log(getQuestion());

function nextQuiz() {
  question.innerText = getQuestion[number].question;
  choice1.innerText = getQuestion[number].choice1;
  choice2.innerText = getQuestion[number].choice2;
  explain.innerText = getQuestion[number].explain;
}

//next.addEventListener("click", nextQuiz(getQuestion));
