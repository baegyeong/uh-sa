const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const question = document.createElement("div");
const choice1 = document.createElement("div");
const choice2 = document.createElement("div");
const quiz = document.querySelector(".question");
const choiceLeft = document.querySelector(".right");
const choiceRight = document.querySelector(".left");
const explain = document.querySelector(".comment");
quiz.appendChild(question);
choiceLeft.appendChild(choice1);
choiceRight.appendChild(choice2);

function getData(num) {
  fetch("http://localhost:3000/app/api/know")
    .then((res) => res.json())
    .then((data) => {
      nextQuiz(data, num);
      return data;
    })
    .catch(() => console.log("fetch 에러!"));
}

// 중복 없는 배열 만들기
let count = 7;
let num = Math.floor(Math.random() * count);
let arr = [];

function makeArr() {
  let i = 0;
  while (i < 7) {
    num = Math.floor(Math.random() * count);
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

// 퀴즈 질문, 선택지, 설명 출력
function nextQuiz(obj, num) {
  question.innerText = obj[num].question;
  choice1.innerText = obj[num].choice1;
  choice2.innerText = obj[num].choice2;
  explain.innerText = obj[num].explain;
}

// 이전버튼, 다음버튼
getData(arr[0]);
let order = 0;
next.addEventListener("click", () => {
  if (order < 8) order++;
  getData(arr[order]);
  if (order === 7) alert("마지막 질문입니다.");
  console.log(order);
});
prev.addEventListener("click", () => {
  order--;
  getData(arr[order]);
  if (order === -1) alert("첫번째 질문입니다.");
  console.log(order);
});
