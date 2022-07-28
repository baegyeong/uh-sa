const know = document.querySelector("#know");
const friendly = document.querySelector("#friendly");
const more = document.querySelector("#more");

function clickKnow() {
  location.href = "http://localhost:3000/app/";
}
function clickFriendly() {
  location.href = "http://localhost:3000/close/";
}
function clickMore() {
  location.href = "http://localhost:3000/close/moregame";
}

know.addEventListener("click", clickKnow);
friendly.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
