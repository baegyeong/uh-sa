const know = document.querySelector(".go-know");
const friend = document.querySelector(".go-friend");
const more = document.querySelector(".go-more");
const home = document.getElementsByClassName("home");

function clickHome() {
  location.href = "http://localhost:3000";
}

function clickKnow() {
  location.href = "http://localhost:3000/app/";
}
function clickFriendly() {
  location.href = "http://localhost:3000/close/";
}
function clickMore() {
  location.href = "http://localhost:3000/close/moregame";
}
for (let i = 0; i < home.length; i++) {
  home[i].addEventListener("click", clickHome);
}
know.addEventListener("click", clickKnow);
friend.addEventListener("click", clickFriendly);
more.addEventListener("click", clickMore);
