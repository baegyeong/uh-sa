const know = document.querySelector("#know");
const friendly = document.querySelector("#friendly");
const more = document.querySelector("#more");

function clickKnow() {
  location.href = "../html/mbti_start.html";
}
function clickFriendly() {
  location.href = "../html/game_choice.html";
}
function clickMore() {
  location.href = "../html/more_game.html";
}

know.addEventListener("click", clickKnow);
friendly.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
