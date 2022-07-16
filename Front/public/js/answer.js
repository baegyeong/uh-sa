const timer = document.querySelector("#Timer");
const name = document.querySelector(".name");
const Stop = document.querySelector(".stop");
const number = Math.floor(Math.random() * 30);
// 타이머 설정 및 0초 시 정답 띄우기
let time = 2;
let sec = "";
timer.innerText = "00" + ":0" + "3";

let goTimeZero = function () {
  if (time > -1) {
    sec = time;
    timer.innerText = "00" + ":0" + sec;
    time--;
  }
  if (time === -1) {
    name.style.display = "flex";
    function answer() {
      const config = {
        method: "get",
      };
      // document.getElementById("peopleQuizImg").style.display = "none";

      fetch("http://localhost:3000/close/api/sinseo", config)
        .then((res) => res.json())
        .then((data) => {
          const answer = document.createElement("div");
          answer.innerHTML = data[number].answer;
          const quizName = document.querySelector(".name");
          quizName.appendChild(answer);
        })
        .catch((error) => console.log("fetch 에러!"));
    }
    answer();

    clearInterval(setTime);
  }
};

let setTime = setInterval(goTimeZero, 1000);

// stop 버튼을 통해 타이머, 정답화면 제어
function clickBtn() {
  if (Stop.innerText === "STOP") {
    event.preventDefault();
    clearInterval(setTime);
    Stop.innerText = "PLAY";
    Stop.style.color = "#008bff";
  } else {
    setTime = setInterval(goTimeZero, 1000);
    Stop.innerText = "STOP";
    Stop.style.color = "red";
  }
}

Stop.addEventListener("click", clickBtn);

const rightZone = document.querySelector;

let score = 0;

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      score += 1;
      localStorage.setItem("SCORE", score);
  }
};
function getPic() {
  const config = {
    method: "get",
  };

  fetch("http://localhost:3000/close/api/sinseo", config)
    .then((res) => res.json())
    .then((data) => {
      const image = document.createElement("img");
      image.src = data[number].image;
      image.id = "peopleQuizImg";
      //   image.style.transform = "translate(14%, 61%)";
      const quizImg = document.querySelector(".img");
      quizImg.appendChild(image);
    })
    .catch((error) => console.log("fetch 에러!"));
}
getPic();
