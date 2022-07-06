const know = document.querySelector("#know");
const friendly = document.querySelector("#friendly");
const more = document.querySelector("#more");

function clickKnow() {
  location.href = "../mbti/mbti_start/mbti_start.html";
}
function clickFriendly() {
  location.href = "../game_choice/game_choice.html";
}
function clickMore() {
  location.href = "../moreGame/moreGame.html";
}

know.addEventListener("click", clickKnow);
friendly.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
