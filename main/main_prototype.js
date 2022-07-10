const know = document.querySelector(".go-know");
const friend = document.querySelector(".go-friend");
const more = document.querySelector(".go-more");
const knowBtn = document.querySelector(".know-btn");
const friendBtn = document.querySelector(".friend-btn");
/*const goBtn = document.querySelector("#btn");
const paragraph = document.querySelector(".all-paragraph");*/
function clickKnow() {
  console.log("ddd");
  location.href = "../mbti/mbti_start/mbti_start.html";
}
function clickFriendly() {
  console.log("dss");
  location.href = "../game_choice/game_choice.html";
}
function clickMore() {
  location.href = "../more_game/more_game.html";
}
/*
function clickGo() {
  a.href = "paragraph";
}*/

know.addEventListener("click", clickKnow);
knowBtn.addEventListener("click", clickKnow);
friend.addEventListener("click", clickFriendly);
friendBtn.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
//goBtn.addEventListener("click", clickGo);
