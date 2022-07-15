const next = document.querySelector("#next");
//const people = localStorage.getItem(peopleNum);
const number = Math.floor(Math.random() * 30);

function getQuestion() {
  const config = {
    method: "get",
  };

  fetch("http://localhost:3000/close/api/commonsense", config)
    .then((res) => res.json())
    .then((data) => {
      const question = document.createElement("div");
      const choice1 = document.createElement("div");
      const choice2 = document.createElement("div");
      question.innerText = data[number].quiz;
      choice1.innerText = data[number].choice1;
      choice2.innerText = data[number].choice2;
      const quiz = document.querySelector(".question");
      const choiceLeft = document.querySelector(".choice:nth-child(2)");
      const choiceRight = document.querySelector(".choice:nth-child(3)");
      quiz.appendChild(question);
      choiceLeft.appendChild(choice1);
      choiceRight.appendChild(choice2);
    })
    .catch((error) => console.log("fetch 에러!"));
}

getQuestion();
