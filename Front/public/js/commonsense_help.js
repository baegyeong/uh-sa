const close = document.querySelector("#next");

function clickClose() {
  location.href = "http://localhost:3000/close/commonsense/player";
}

close.addEventListener("click", clickClose);
