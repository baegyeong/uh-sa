// const next = document.querySelector("#next");
// //const people = localStorage.getItem(peopleNum);
// const number = Math.floor(Math.random() * 30);

// function getQuestion() {
//   const config = {
//     method: "get",
//   };

//   fetch("http://localhost:3000/close/api/commonsense", config)
//     .then((res) => res.json())
//     .then((data) => {
//       const question = document.createElement("div");
//       const choice1 = document.createElement("div");
//       const choice2 = document.createElement("div");
//       question.innerText = data[number].quiz;
//       choice1.innerText = data[number].choice1;
//       choice2.innerText = data[number].choice2;
//       const quiz = document.querySelector(".question");
//       const choiceLeft = document.querySelector(".choice:nth-child(2)");
//       const choiceRight = document.querySelector(".choice:nth-child(3)");
//       quiz.appendChild(question);
//       choiceLeft.appendChild(choice1);
//       choiceRight.appendChild(choice2);
//     })
//     .catch((error) => console.log("fetch 에러!"));
// };

// getQuestion();
// next.addEventListener("click", getQuestion);

const next = document.querySelector("#next");
//const people = localStorage.getItem(peopleNum);
const number = Math.floor(Math.random() * 30);

let quizObj;
let question;
let choice1;
let choice2;
let quiz;
let choiceLeft;
let ChoiceRight;

fetch("http://localhost:3000/close/api/commonsense")
  .then((res) => res.json())
  .then((data) => {
    quizObj = data;
    const array = console.log(Object.entries(quizObj));
    // const array = quizObj.id;
    // console.log(array);
    // console.log(quizObj);
    question = document.createElement("div");
    choice1 = document.createElement("div");
    choice2 = document.createElement("div");
    question.innerText = quizObj[number].quiz;
    choice1.innerText = quizObj[number].choice1;
    choice2.innerText = quizObj[number].choice2;
    quiz = document.querySelector(".question");
    choiceLeft = document.querySelector(".choice:nth-child(2)");
    choiceRight = document.querySelector(".choice:nth-child(3)");
    quiz.appendChild(question);
    choiceLeft.appendChild(choice1);
    choiceRight.appendChild(choice2);
  })
  .catch((error) => console.log("fetch 에러!"));

next.addEventListener("click", () => {
  question.innerText = quizObj[number].quiz;
  choice1.innerText = quizObj[number].choice1;
  choice2.innerText = quizObj[number].choice2;
});
