const close = document.querySelector("#close");
const gray = document.getElementsByClassName("gray");

function clickClose() {
  gray.classList.add("hidden");
}

close.addEventListener("click", clickClose);
