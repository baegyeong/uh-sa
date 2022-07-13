const know = document.querySelector(".go-know");
const friend = document.querySelector(".go-friend");
const more = document.querySelector(".go-more");
const knowBtn = document.querySelector(".know-btn");
const friendBtn = document.querySelector(".friend-btn");

function clickKnow() {
  console.log("ddd");
  location.href = "../html/mbti_start.html";
}
function clickFriendly() {
  console.log("dss");
  location.href = "../html/game_choice.html";
}
function clickMore() {
  location.href = "../html/more_game.html";
}

know.addEventListener("click", clickKnow);
knowBtn.addEventListener("click", clickKnow);
friend.addEventListener("click", clickFriendly);
friendBtn.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
